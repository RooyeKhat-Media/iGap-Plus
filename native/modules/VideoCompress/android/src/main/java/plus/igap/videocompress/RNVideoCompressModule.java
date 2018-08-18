package plus.igap.videocompress;

import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import plus.igap.filesystem.FileUtil;
import plus.igap.videocompress.VideoCompressor.VideoCompress;
import plus.igap.videocompress.VideoCompressor.VideoController;


public class RNVideoCompressModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNVideoCompressModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void compress(String inputPath, final Promise promise) {

        if (Build.VERSION.SDK_INT < 18) {
            promise.resolve(inputPath);
            return;
        }

        Uri uriPath = Uri.parse(inputPath);
        if (uriPath == null || uriPath.toString().length() == 0) {
            promise.reject("uri path is null");
            return;
        }

        String path = "";
        FileUtil fileUtil = new FileUtil(reactContext);

        try {
            path = fileUtil.getFilePathFromUri(uriPath);
        } catch (Exception e) {
            promise.reject(e);
            return;
        }

        File file = new File(path);
        if (!file.exists()) {
            promise.reject("file not exists");
            return;
        }

        MediaMetadataRetriever retriever = new MediaMetadataRetriever();
        retriever.setDataSource(path);
        long duration = Long.valueOf(retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION));
        String width = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH);
        int originalWidth = Integer.valueOf(width);

        if (originalWidth <= 640 && (file.length() / duration < 250)) {
            promise.resolve(path);
            return;
        }

        final String outPath =
                fileUtil.getFilesDirPath() + File.separator + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + ".mp4";

        VideoCompress.CompressListener listener = new VideoCompress.CompressListener() {
            @Override
            public void onStart() {
            }

            @Override
            public void onSuccess() {
                promise.resolve(outPath);
            }

            @Override
            public void onFail() {
                promise.reject("compress failed");
            }

            @Override
            public void onProgress(float percent) {
            }
        };

        VideoCompress.compressVideo(path, outPath, VideoController.COMPRESS_QUALITY_LOW, listener);

    }


    @Override
    public String getName() {
        return "RNVideoCompress";
    }
}
