package com.reactnativedemo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.util.Log

class PingPongModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "PingPongModule"

    @ReactMethod
    fun send(input: String, promise: Promise) {
        Log.d("PingPongModule", "Received input: $input")
        try {
            promise.resolve("bye from android")
        } catch (e: Exception) {
            promise.reject("ERROR", e.message, e)
        }
    }
}
