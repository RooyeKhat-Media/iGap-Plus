
package plus.igap.camera;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.v4.content.FileProvider;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import plus.igap.filesystem.FileUtil;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class RNIGCameraModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final int OPEN_CAMERA_TAKE_PICTURE = 600;
    private static final int OPEN_CAMERA_CAPTURE_VIDEO = 601;

    private final ReactApplicationContext reactContext;
    private Promise promise;
    private String picPath;


    public RNIGCameraModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        reactContext.addActivityEventListener(this);
    }


    @ReactMethod
    public void takePictureAsync(Promise promise) {

        this.promise = promise;
        try {
            if (emptyCamera()) {
                promise.reject("Camera not exist");
                return;
            }

            Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            }
            intent.putExtra(MediaStore.EXTRA_OUTPUT, getImageUri(".jpg"));
            reactContext.startActivityForResult(intent, OPEN_CAMERA_TAKE_PICTURE, Bundle.EMPTY);
        } catch (Exception e) {
            promise.reject(e);
        }

    }


    @ReactMethod
    public void recordAsync(Promise promise) {
        this.promise = promise;
        try {
            if (emptyCamera()) {
                promise.reject("Camera not exist");
                return;
            }

            Intent intent = new Intent(MediaStore.ACTION_VIDEO_CAPTURE);
            intent.putExtra(MediaStore.EXTRA_OUTPUT, getImageUri(".mp4"));
            reactContext.startActivityForResult(intent, OPEN_CAMERA_CAPTURE_VIDEO, Bundle.EMPTY);
        } catch (Exception e) {
            promise.reject(e);
        }

    }


    @Override
    public String getName() {
        return "RNIGCamera";
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == OPEN_CAMERA_CAPTURE_VIDEO || requestCode == OPEN_CAMERA_TAKE_PICTURE) {
            if (resultCode != Activity.RESULT_OK) {
                promise.reject("Bad result code : " + resultCode);
                return;
            }

            promise.resolve(picPath);
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    private boolean emptyCamera() {
        PackageManager packageManager = reactContext.getPackageManager();
        return !packageManager.hasSystemFeature(PackageManager.FEATURE_CAMERA);
    }

    private Uri getImageUri(String suffix) throws IOException {
        Uri uri;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            File storageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM), "Camera");
            File imageFile = File.createTempFile(new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()), suffix, storageDir);
            uri = FileProvider.getUriForFile(reactContext, reactContext.getApplicationContext().getPackageName() + ".provider", imageFile);
            picPath = "file://"+imageFile.getAbsolutePath();
        } else {
            FileUtil fileUtil = new FileUtil(reactContext);
            String path = fileUtil.getFilesDirPath() + File.separator + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + suffix;
            uri = Uri.fromFile(new File(path));
            picPath = "file://"+uri.getPath();
        }
        return uri;
    }
}