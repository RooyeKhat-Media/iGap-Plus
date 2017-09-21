package plus.igap.filesystem;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;


public class AttachFile {

    public final static String imageType = "image";
    public final static String videoType = "video";
    public final static String audioType = "audio";
    public final static String fileType = "all";


    public void openAttachment(String type, ReactApplicationContext context, int id, boolean selectMulti) throws Exception {
        switch (type) {
            case imageType:
                pickImage(context, id, selectMulti);
                break;
            case videoType:
                pickVideo(context, id, selectMulti);
                break;
            case audioType:
                pickAudio(context, id, selectMulti);
                break;
            case fileType:
                pickFile(context, id, selectMulti);
                break;
            default:
                throw new Exception("type file piker is not set");
        }
    }


    private void pickFile(ReactApplicationContext context, int id, boolean selectMulti) {
        selectMediaType(context, "*/*", null, id, selectMulti);
    }

    private void pickImage(ReactApplicationContext context, int id, boolean selectMulti) {
        selectMediaType(context, "image/*", new String[]{"image/*"}, id, selectMulti);
    }

    private void pickVideo(ReactApplicationContext context, int id, boolean selectMulti) {
        selectMediaType(context, "video/*", new String[]{"video/*"}, id, selectMulti);
    }

    private void pickAudio(ReactApplicationContext context, int id, boolean selectMulti) {
        selectMediaType(context, "audio/*", null, id, selectMulti);
    }

    private void selectMediaType(ReactApplicationContext context, @NonNull String type, @Nullable String[] extraMimeType, int requestCode, boolean selectMulti) throws ActivityNotFoundException {
        final Intent intent = new Intent();

        intent.setType(type);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2 && selectMulti) {
            intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            if (extraMimeType != null) {
                intent.putExtra(Intent.EXTRA_MIME_TYPES, extraMimeType);
            }

            intent.setAction(Intent.ACTION_OPEN_DOCUMENT);
            context.startActivityForResult(intent, requestCode, Bundle.EMPTY);
        } else {
            intent.setAction(Intent.ACTION_GET_CONTENT);
            context.startActivityForResult(intent, requestCode, Bundle.EMPTY);
        }
    }


}
