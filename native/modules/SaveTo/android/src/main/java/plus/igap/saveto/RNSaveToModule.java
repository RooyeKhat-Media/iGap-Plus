package plus.igap.saveto;

import android.os.Environment;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class RNSaveToModule extends ReactContextBaseJavaModule {

    enum SaveType {
        download,
        music
    }

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
        saveTo(SaveType.music, fileUri, promise);
    }

    @ReactMethod
    public void saveToDownloads(String fileUri, Promise promise) {
        saveTo(SaveType.download, fileUri, promise);
    }

    private void saveTo(final SaveType type, final String fileUri, final Promise promise) {

        new Thread(new Runnable() {
            @Override
            public void run() {

                try {
                    if (fileUri == null || fileUri.length() < 1) {
                        throw new Exception("File uri is null");
                    }

                    String fileName = fileUri.substring(fileUri.lastIndexOf("/") + 1);

                    if (fileName.length() < 1) {
                        throw new Exception("File name is null");
                    }

                    File src = new File(fileUri);

                    if (!src.exists()) {
                        throw new Exception("File is not exist");
                    }

                    String destinationPath = "";

                    switch (type) {
                        case download:
                            if (Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).exists()) {
                                destinationPath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath() + "/" + fileName;
                            } else {
                                destinationPath = makeDirectoryIfNotExist("Downloads") + "/" + fileName;
                            }
                            break;
                        case music:
                            if (Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_MUSIC).exists()) {
                                destinationPath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_MUSIC).getAbsolutePath() + "/" + fileName;
                            } else {
                                destinationPath = makeDirectoryIfNotExist("Music") + "/" + fileName;
                            }
                            break;
                    }

                    copyFile(src, new File(destinationPath));

                    promise.resolve(null);

                } catch (Exception e) {
                    promise.reject(ERROR_FATAL, e);
                }
            }
        }).start();
    }

    private void copyFile(File src, File dst) throws IOException {

        InputStream in = null;
        OutputStream out = null;

        try {
            in = new FileInputStream(src);
            out = new FileOutputStream(dst);
            // Transfer bytes from in to out
            byte[] buf = new byte[1024];
            int len;
            while ((len = in.read(buf)) > 0) {
                out.write(buf, 0, len);
            }
        } finally {
            if (in != null) {
                in.close();
            }
            if (out != null) {
                out.close();
            }
        }
    }

    private String makeDirectoryIfNotExist(String folderName) {
        String dirFolder = Environment.getExternalStorageDirectory().getAbsolutePath() + "/" + folderName;
        File projDir = new File(dirFolder);
        if (!projDir.exists()) {
            projDir.mkdirs();
        }
        return dirFolder;
    }

}