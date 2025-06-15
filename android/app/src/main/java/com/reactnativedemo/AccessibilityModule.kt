package com.reactnativedemo

import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.View
import android.view.ViewGroup
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class AccessibilityModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private val moduleName = "AccessibilityModule"

    override fun getName(): String = moduleName

    @ReactMethod
    @Suppress("UNUSED_PARAMETER")
    fun addListener(eventName: String) {
        // Required for NativeEventEmitter compatibility
    }

    @ReactMethod
    @Suppress("UNUSED_PARAMETER")
    fun removeListeners(count: Int) {
        // Required for NativeEventEmitter compatibility
    }

    @ReactMethod
    fun enableAccessibilityFocusTracking() {
        Handler(Looper.getMainLooper()).post {
            setupFocusTracking()
        }
    }

    private fun setupFocusTracking() {
        val rootView: View? = reactContext.currentActivity?.findViewById(android.R.id.content)
        if (rootView == null) {
            Log.e(moduleName, "Could not find root view or activity")
            return
        }
        rootView.viewTreeObserver.addOnGlobalFocusChangeListener { oldFocus, newFocus ->
            oldFocus?.let { sendEvent("blur", it) };
            newFocus?.let { sendEvent("focus", it) }
        }
        attachFocusListeners(rootView)
    }

    @Suppress("NAME_SHADOWING")
    private fun attachFocusListeners(view: View) {
        view.setOnFocusChangeListener { view, hasFocus ->
            sendEvent(if (hasFocus) "focus" else "blur", view)
        }
        if (view is ViewGroup) {
            for (i in 0 until view.childCount) {
                attachFocusListeners(view.getChildAt(i))
            }
        }
    }

    private fun sendEvent(name: String, view: View) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(name, view.getTag(com.facebook.react.R.id.react_test_id))
    }
}
