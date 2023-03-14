package com.rnlocalstorage.NativeModules

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

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

    override fun hasConstants(): Boolean {
        return true
    }

}
