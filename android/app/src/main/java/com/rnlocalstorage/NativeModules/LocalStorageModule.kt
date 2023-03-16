package com.rnlocalstorage.NativeModules


import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap

import kotlinx.serialization.*
import kotlinx.serialization.json.*
import java.net.URL


@Serializable
class Todo(val id: Int, val userId: Int, val title: String, val completed: Boolean)

class LocalStorageModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "LocalStorageModule"

    override fun getConstants(): MutableMap<String, Any?> {
        val constants = mutableMapOf<String, Any?>()
        constants["str"] = "Hello from native modules"
        constants["num"] = 12
        constants["float"] = 12.5
        constants["bool"] = true
        constants["obj"] = mutableMapOf("a" to "a", "b" to "b")
        constants["arr"] = arrayOf("item1", "item2")
        constants["null"] = null

        return constants
    }

    @ReactMethod
    fun getTodos(promise: Promise) {
        try {
            val rawData = URL("https://jsonplaceholder.typicode.com/todos").openStream().bufferedReader().use { it.readText() }
            val todos = Json.decodeFromString<List<Todo>>(rawData)

            val todosListNativeMap = todos.map {
                Arguments.makeNativeMap(
                    mapOf(
                        "id" to it.id,
                        "title" to it.title,
                        "userId" to it.userId,
                        "completed" to it.completed
                    )
                )
            }

            promise.resolve(Arguments.makeNativeArray(todosListNativeMap))
        } catch (e: Exception) {
            promise.reject(e)
        }

    }

    override fun hasConstants(): Boolean {
        return true
    }

}
