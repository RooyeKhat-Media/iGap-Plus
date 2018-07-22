package plus.igap.filesystem;

import android.content.ContentResolver;
import android.content.ContentUris;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class FileUtil {


    ReactApplicationContext context;

    public FileUtil(ReactApplicationContext context) {
        this.context = context;
    }


    public String getFilePathFromUri(Uri uri) throws Exception {

        if (uri == null) {
            throw new Exception("uri is empty");
        }

        String path = null;

        if (uri.getScheme() != null && uri.getScheme().equals(ContentResolver.SCHEME_CONTENT)) {
            path = getPath(uri);
        } else {
            path = uri.getPath();
        }

        if (path == null) {
            path = getPathN(uri);
        }

        if (path == null) {
            throw new Exception("can not get path from uri");
        }

        return path;
    }


    private String getPathN(Uri uri) {
        if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            try {
                String name = getFileName(uri.getPath());

                if (name == null || name.length() == 0) {
                    name = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
                } else {
                    try {
                        String hashName = makeSHA1Hash(uri.getPath());
                        name = hashName + File.separator + name;
                    } catch (NoSuchAlgorithmException e) {
                        Log.i("RNIGFileSystem", e.getMessage(), e);
                    }
                }

                String destinationPath = getFilesDirPath() + File.separator + name;
                InputStream input = context.getContentResolver().openInputStream(uri);
                copyFile(input, new File(destinationPath));

                return destinationPath;
            } catch (Exception e) {
                Log.i("RNIGFileSystem", e.getMessage(), e);
            }
        }

        return null;
    }

    private String makeSHA1Hash(String input) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest md = MessageDigest.getInstance("SHA1");
        md.reset();
        byte[] buffer = input.getBytes("UTF-8");
        md.update(buffer);
        byte[] digest = md.digest();

        String hexStr = "";
        for (int i = 0; i < digest.length; i++) {
            hexStr += Integer.toString((digest[i] & 0xff) + 0x100, 16).substring(1);
        }
        return hexStr;
    }


    public void copyFile(InputStream in, File dst) throws Exception {

        File makeDir = new File(dst.getParent());
        if (!makeDir.exists() && !makeDir.mkdir())
            throw new Exception("Cannot make dir");

        OutputStream out = new FileOutputStream(dst);

        // Transfer bytes from in to out
        byte[] buf = new byte[1024];
        int len;
        while ((len = in.read(buf)) > 0) {
            out.write(buf, 0, len);
        }

        in.close();
        out.close();
    }

    public String getFileName(String path) {
        if (path == null) return "";
        if (path.length() < 1) return "";

        return path.substring(path.lastIndexOf("/") + 1);
    }


    private String getPath(final Uri uri) {

        // DocumentProvider
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && DocumentsContract.isDocumentUri(context, uri)) {
            if (isExternalStorageDocument(uri)) {
                final String docId = DocumentsContract.getDocumentId(uri);
                final String[] split = docId.split(":");
                final String type = split[0];

                if ("primary".equalsIgnoreCase(type)) {
                    return Environment.getExternalStorageDirectory() + "/" + split[1];
                }else {
                        String strPath;
                        if (Environment.isExternalStorageRemovable()) {
                            strPath = System.getenv("EXTERNAL_STORAGE");
                        } else {
                            strPath = System.getenv("SECONDARY_STORAGE");
                            if (strPath == null || strPath.length() == 0) {
                                strPath = System.getenv("EXTERNAL_SDCARD_STORAGE");
                            }
                        }
                        if (strPath != null && strPath.length() > 0) {
                            return strPath + "/" + split[1];
                        }
                    }
            }
            // DownloadsProvider
            else if (isDownloadsDocument(uri)) {

                final String id = DocumentsContract.getDocumentId(uri);
                final Uri contentUri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), Long.valueOf(id));

                return getDataColumn(context, contentUri, null, null);
            }
            // MediaProvider
            else if (isMediaDocument(uri)) {
                final String docId = DocumentsContract.getDocumentId(uri);
                final String[] split = docId.split(":");
                final String type = split[0];

                Uri contentUri = null;
                if ("image".equals(type)) {
                    contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                } else if ("video".equals(type)) {
                    contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                } else if ("audio".equals(type)) {
                    contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                }

                final String selection = "_id=?";
                final String[] selectionArgs = new String[]{
                        split[1]
                };

                return getDataColumn(context, contentUri, selection, selectionArgs);
            }
        }
        // MediaStore (and general)
        else if ("content".equalsIgnoreCase(uri.getScheme())) {

            // Return the remote address
            if (isGooglePhotosUri(uri)) return uri.getLastPathSegment();

            return getDataColumn(context, uri, null, null);
        }
        // File
        else if ("file".equalsIgnoreCase(uri.getScheme())) {
            return uri.getPath();
        }

        return null;
    }


    public String getFilesDirPath() {
        File storageDir = context.getExternalFilesDir(null);
        if (storageDir == null || (!storageDir.exists() && !storageDir.mkdirs())) {
              storageDir = context.getFilesDir();
        }
       return storageDir.getAbsolutePath();
    }


    /**
     * @param uri The Uri to check.
     * @return Whether the Uri authority is ExternalStorageProvider.
     */
    public static boolean isExternalStorageDocument(Uri uri) {
        return "com.android.externalstorage.documents".equals(uri.getAuthority());
    }

    /**
     * @param uri The Uri to check.
     * @return Whether the Uri authority is DownloadsProvider.
     */
    public static boolean isDownloadsDocument(Uri uri) {
        return "com.android.providers.downloads.documents".equals(uri.getAuthority());
    }

    /**
     * @param uri The Uri to check.
     * @return Whether the Uri authority is MediaProvider.
     */
    public static boolean isMediaDocument(Uri uri) {
        return "com.android.providers.media.documents".equals(uri.getAuthority());
    }

    /**
     * @param uri The Uri to check.
     * @return Whether the Uri authority is Google Photos.
     */
    public static boolean isGooglePhotosUri(Uri uri) {
        return "com.google.android.apps.photos.content".equals(uri.getAuthority());
    }

    /**
     * Get the value of the data column for this Uri. This is useful for
     * MediaStore Uris, and other file-based ContentProviders.
     *
     * @param context       The context.
     * @param uri           The Uri to query.
     * @param selection     (Optional) Filter used in the query.
     * @param selectionArgs (Optional) Selection arguments used in the query.
     * @return The value of the _data column, which is typically a file path.
     */
    public static String getDataColumn(Context context, Uri uri, String selection, String[] selectionArgs) {

        Cursor cursor = null;
        final String column = MediaStore.Images.Media.DATA;
        final String[] projection = {
                column
        };

        try {
            cursor = context.getContentResolver().query(uri, projection, selection, selectionArgs, null);
            if (cursor != null && cursor.moveToFirst()) {
                final int column_index = cursor.getColumnIndexOrThrow(column);
                return cursor.getString(column_index);
            }
        } catch (IllegalArgumentException e) {

        } finally {
            if (cursor != null) cursor.close();
        }
        return null;
    }


}
