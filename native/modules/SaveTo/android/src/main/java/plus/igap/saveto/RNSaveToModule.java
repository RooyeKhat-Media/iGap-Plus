package plus.igap.saveto;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNSaveToModule extends ReactContextBaseJavaModule {

  private static final String ERROR_FATAL = "ERROR_FATAL";

  public RNSaveToModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNSaveTo";
  }

  @ReactMethod
  public void saveToMusic(String fileUri, Promise promise) {
    try {
      promise.resolve(null);
    } catch (Exception e) {
      promise.reject(ERROR_FATAL, e);
    }
  }

  @ReactMethod
  public void saveToDownloads(String fileUri, Promise promise) {
    try {
      promise.resolve(null);
    } catch (Exception e) {
      promise.reject(ERROR_FATAL, e);
    }
  }

}