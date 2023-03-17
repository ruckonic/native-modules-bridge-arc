package com.rnlocalstorage.NativeModules



import com.facebook.common.internal.Throwables
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableNativeArray

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
            val todos = this.fetchTodos()
            val todosWritableNativeArray = this.makeWritableNativeTodo(todos)

            promise.resolve(todosWritableNativeArray)
        } catch (e: Exception) {

            promise.reject(e)
        }

    }

    private fun fetchTodos(): Array<Todo> {
        val rawData = URL("https://jsonplaceholder.typicode.com/todos").openStream().bufferedReader().use { it.readText() }
        return Json.decodeFromString(rawData)

    }

    private fun todoToMap(todo: Todo): MutableMap<String, Any> {
        return mutableMapOf(
            "id" to todo.id,
            "title" to todo.title,
            "userId" to todo.userId,
            "completed" to todo.completed
        )
    }

    private fun makeWritableNativeTodo(todos: Array<Todo>): WritableNativeArray? {
        val todosListNativeMap = todos.map {
            Arguments.makeNativeMap(
                todoToMap(it)
            )
        }

        return Arguments.makeNativeArray(todosListNativeMap)
    }

    @ReactMethod
    fun getTodosCb(callback: Callback) {
        try {
            val todos = this.fetchTodos()
            val todosWritableNativeArray = this.makeWritableNativeTodo(todos)

            callback.invoke(null, todosWritableNativeArray)
        } catch (e: Exception) {
            callback.invoke(e.message, null)
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun sayHello(name: String): String {
        return "hello $name"
    }

    override fun hasConstants(): Boolean {
        return true
    }

}
