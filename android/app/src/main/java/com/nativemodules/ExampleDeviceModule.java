package com.nativemodules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ExampleDeviceModule extends ReactContextBaseJavaModule {

  public ExampleDeviceModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "ExampleDevice";
  }

  @ReactMethod
  public void getDeviceName(Callback cb) {
    try {
        cb.invoke(null, android.os.Build.MODEL);
    } catch (Exception e){
        cb.invoke(e.toString(), null);
    }
  }

}