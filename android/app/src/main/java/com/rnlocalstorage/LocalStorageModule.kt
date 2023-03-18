package com.rnlocalstorage

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class LocalStorageModule(reactApplicationContext: ReactApplicationContext): ReactContextBaseJavaModule(reactApplicationContext) {
    private val sharedPreference =  reactApplicationContext.getSharedPreferences("PREFERENCE_NAME", Context.MODE_PRIVATE)
    private val editor = sharedPreference.edit()

    override fun getName() = "LocalStorageModule"
    override fun hasConstants() = true

    override fun getConstants() = mutableMapOf("keyPrincipal" to "___superkey___")

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun setItem(key: String, value: String): String? {
        editor.putString(key, value).commit()
        return value
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getItem(key: String): String? {
        return sharedPreference.getString(key, null)
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun removeItem(key: String): String? {
       val value= sharedPreference.getString(key, null)

        if (value != null) {
            editor.remove(key).commit()
        }

        return value
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun clear(): String? {
        return "Done"
    }
}