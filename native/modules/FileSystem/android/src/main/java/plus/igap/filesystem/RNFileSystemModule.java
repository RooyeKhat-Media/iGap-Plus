package plus.igap.filesystem;

import android.app.Activity;
import android.content.ClipData;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

import okio.ByteString;


public class RNFileSystemModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private class PromiseWrapper {
        Promise promise;
        int methodType;

        private PromiseWrapper(Promise promise, int methodType) {
            this.promise = promise;
            this.methodType = methodType;
        }
    }

    private HashMap<Integer, PromiseWrapper> promises = new HashMap<>();
    private HashMap<Integer, FileWrapper> files = new HashMap<>();
    private int uid = 0;


    private static final int FILE_PICKER_METHOD_TYPE = 1;
    private static final int FILES_PICKER_METHOD_TYPE = 2;

    private static final String ERROR_BAD_RESULT_CODE = "ERROR_BAD_RESULT_CODE";
    private static final String ERROR_NO_DATA = "ERROR_NO_DATA";
    private static final String ERROR_FATAL = "ERROR_FATAL";

    static class Fields {
        static final String FILE_URI = "fileUri";
        static final String FILE_NAME = "fileName";
        static final String FILE_SIZE = "fileSize";
    }

    private static final int FILE_OPEN_MODE_READ = 0;
    private static final int FILE_OPEN_MODE_WRITE = 1;

    public RNFileSystemModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "RNFileSystem";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("read", FILE_OPEN_MODE_READ);
        constants.put("write", FILE_OPEN_MODE_WRITE);
        return constants;
    }

    private int getUid() {
        if (65535 <= uid)
            uid = 0;
        uid++;
        return uid;
    }

    private void putPromise(int id, PromiseWrapper promise) {
        promises.put(id, promise);
    }

    private PromiseWrapper getPromise(int id) {
        return promises.get(id);
    }

    private void resolvePromise(int id, @Nullable Object value) {
        PromiseWrapper promiseWrapper = getPromise(id);
        if (promiseWrapper != null) {
            promiseWrapper.promise.resolve(value);
            promises.remove(id);
        }
    }

    private void rejectPromise(int id, String code, String message) {
        PromiseWrapper promiseWrapper = getPromise(id);
        if (promiseWrapper != null) {
            promiseWrapper.promise.reject(code, message);
            promises.remove(id);
        }
    }

    private void rejectPromise(int id, String code, Throwable e) {
        PromiseWrapper promiseWrapper = getPromise(id);
        if (promiseWrapper != null) {
            promiseWrapper.promise.reject(code, e);
            promises.remove(id);
        }
    }

    @ReactMethod
    public void filePicker(String fileType, Promise promise) {
        int id = getUid();

        try {
            PromiseWrapper promiseWrapper = new PromiseWrapper(promise, FILE_PICKER_METHOD_TYPE);
            putPromise(id, promiseWrapper);

            new AttachFile().openAttachment(fileType, getReactApplicationContext(), id, false);
        } catch (Exception e) {
            rejectPromise(id, ERROR_FATAL, e);
        }
    }

    @ReactMethod
    public void filesPicker(String fileType, Promise promise) {
        int id = getUid();
        try {
            PromiseWrapper promiseWrapper = new PromiseWrapper(promise, FILES_PICKER_METHOD_TYPE);
            putPromise(id, promiseWrapper);

            new AttachFile().openAttachment(fileType, getReactApplicationContext(), id, true);

        } catch (Exception e) {
            rejectPromise(id, ERROR_FATAL, e);
        }
    }

    private WritableMap getFileInfo(Uri uri) throws Exception {
        WritableMap result = Arguments.createMap();

        String path = new FileUtil(getReactApplicationContext()).getFilePathFromUri(uri);

        File file = new File(path);

        if (!file.exists() || file.isDirectory())
            throw new Exception("File is not exists");

        result.putString(RNFileSystemModule.Fields.FILE_NAME, file.getName());
        result.putString(RNFileSystemModule.Fields.FILE_SIZE, String.valueOf(file.length()));
        result.putString(RNFileSystemModule.Fields.FILE_URI, path);

        return result;
    }

    @ReactMethod
    public void fInfo(final String fileUri, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                try {
                    Uri uri = Uri.parse(fileUri);

                    promise.resolve(getFileInfo(uri));
                } catch (Exception e) {
                    promise.reject(e);
                }
            }
        }).start();
    }

    @ReactMethod
    public void fOpen(final String fileUri, final int mode, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                try {
                    FileWrapper fileWrapper;

                    switch (mode) {
                        case FILE_OPEN_MODE_READ:
                            File file = new File(fileUri);
                            if (!file.exists() || file.isDirectory())
                                throw new Exception("File is not exists");

                            RandomAccessFile randomAccessFile = new RandomAccessFile(file, "r");

                            fileWrapper = new FileWrapper(randomAccessFile);
                            break;
                        case FILE_OPEN_MODE_WRITE:
                            FileOutputStream fileOutputStream = new FileOutputStream(new File(fileUri),true);

                            fileWrapper = new FileWrapper(fileOutputStream);
                            break;
                        default:
                            throw new IllegalArgumentException("Invalid open mode " + mode);
                    }
                    files.put(fileWrapper.getRefId(), fileWrapper);
                    promise.resolve(fileWrapper.getRefId());
                } catch (Exception e) {
                    promise.reject(e);
                }
            }
        }).start();
    }

    @ReactMethod
    public void fRead(final int refId, final String offset, final int limit, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                try {
                    FileWrapper fileWrapper = files.get(refId);

                    if (fileWrapper == null)
                        throw new Exception("Invalid refId");


                    ByteBuffer byteBuffer = ByteBuffer.allocate(limit);
                    FileChannel fileChannel = fileWrapper.getInputStreamChannel();
                    fileChannel.position(Long.parseLong(offset));
                    fileChannel.read(byteBuffer);
                    byteBuffer.flip();

                    promise.resolve(ByteString.of(byteBuffer).base64());
                } catch (Exception e) {
                    promise.reject(e);
                }
            }
        }).start();
    }

    @ReactMethod
    public void fSha256(final int refId, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                try {
                    FileWrapper fileWrapper = files.get(refId);

                    if (fileWrapper == null)
                        throw new Exception("Invalid refId");

                    RandomAccessFile randomAccessFile = fileWrapper.getRandomAccessFile();
                    if (randomAccessFile == null)
                        throw new Exception("File is not readable");

                    randomAccessFile.getChannel().position(0);
                    FileInputStream inputStream = new FileInputStream(randomAccessFile.getFD());

                    BufferedInputStream bufferedInputStream = new BufferedInputStream(inputStream);
                    byte[] buffer = new byte[8192];
                    int count;
                    MessageDigest digest = MessageDigest.getInstance("SHA-256");

                    while ((count = bufferedInputStream.read(buffer)) > 0) {
                        digest.update(buffer, 0, count);
                    }
                    byte[] hash = digest.digest();

                    promise.resolve(ByteString.of(hash).base64());
                } catch (Exception e) {
                    promise.reject(e);
                }
            }
        }).start();
    }


    private byte[] decode(String in) {
        // Ignore trailing '=' padding and whitespace from the input.
        int limit = in.length();
        for (; limit > 0; limit--) {
            char c = in.charAt(limit - 1);
            if (c != '=' && c != '\n' && c != '\r' && c != ' ' && c != '\t') {
                break;
            }
        }

        // If the input includes whitespace, this output array will be longer than necessary.
        byte[] out = new byte[(int) (limit * 6L / 8L)];
        int outCount = 0;
        int inCount = 0;

        int word = 0;
        for (int pos = 0; pos < limit; pos++) {
            char c = in.charAt(pos);

            int bits;
            if (c >= 'A' && c <= 'Z') {
                // char ASCII value
                //  A    65    0
                //  Z    90    25 (ASCII - 65)
                bits = c - 65;
            } else if (c >= 'a' && c <= 'z') {
                // char ASCII value
                //  a    97    26
                //  z    122   51 (ASCII - 71)
                bits = c - 71;
            } else if (c >= '0' && c <= '9') {
                // char ASCII value
                //  0    48    52
                //  9    57    61 (ASCII + 4)
                bits = c + 4;
            } else if (c == '+' || c == '-') {
                bits = 62;
            } else if (c == '/' || c == '_') {
                bits = 63;
            } else if (c == '\n' || c == '\r' || c == ' ' || c == '\t') {
                continue;
            } else {
                return null;
            }

            // Append this char's 6 bits to the word.
            word = (word << 6) | (byte) bits;

            // For every 4 chars of input, we accumulate 24 bits of output. Emit 3 bytes.
            inCount++;
            if (inCount % 4 == 0) {
                out[outCount++] = (byte) (word >> 16);
                out[outCount++] = (byte) (word >> 8);
                out[outCount++] = (byte) word;
            }
        }

        int lastWordChars = inCount % 4;
        if (lastWordChars == 1) {
            // We read 1 char followed by "===". But 6 bits is a truncated byte! Fail.
            return null;
        } else if (lastWordChars == 2) {
            // We read 2 chars followed by "==". Emit 1 byte with 8 of those 12 bits.
            word = word << 12;
            out[outCount++] = (byte) (word >> 16);
        } else if (lastWordChars == 3) {
            // We read 3 chars, followed by "=". Emit 2 bytes for 16 of those 18 bits.
            word = word << 6;
            out[outCount++] = (byte) (word >> 16);
            out[outCount++] = (byte) (word >> 8);
        }

        // If we sized our out array perfectly, we're done.
        if (outCount == out.length) return out;

        // Copy the decoded bytes to a new, right-sized array.
        byte[] prefix = new byte[outCount];
        System.arraycopy(out, 0, prefix, 0, outCount);
        return prefix;
    }

    @ReactMethod
    public void fAppend(final int refId, final String base64String, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                try {
                    FileWrapper fileWrapper = files.get(refId);

                    if (fileWrapper == null)
                        throw new Exception("Invalid refId");

                    FileOutputStream fileOutputStream = fileWrapper.getFileOutputStream();
                    if (fileOutputStream == null)
                        throw new Exception("File is not writable");

                    fileOutputStream.write(decode(base64String));
                    fileOutputStream.flush();

                    promise.resolve(null);
                } catch (Exception e) {
                    promise.reject(e);
                }
            }
        }).start();

    }

    @ReactMethod
    public void fClose(final int refId, final Promise promise) {
        new Thread(new Runnable() {
            public void run() {
                FileWrapper fileWrapper = files.get(refId);
                if (fileWrapper != null) {
                    files.remove(fileWrapper.getRefId());
                    fileWrapper.closeStream();
                }
                promise.resolve(null);
            }
        }).start();
    }


    @ReactMethod
    public void getFilesDir(Promise promise) {
        promise.resolve(new FileUtil(getReactApplicationContext()).getFilesDirPath());
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (resultCode != Activity.RESULT_OK) {
            rejectPromise(requestCode, ERROR_BAD_RESULT_CODE, "Bad result code: " + resultCode);
            return;
        }

        if (data == null) {
            rejectPromise(requestCode, ERROR_NO_DATA, "No data");
            return;
        }

        PromiseWrapper promiseWrapper = getPromise(requestCode);

        if (promiseWrapper != null) {
            int methodType = promiseWrapper.methodType;
            switch (methodType) {
                case FILE_PICKER_METHOD_TYPE:
                    try {
                        Uri uri = data.getData();
                        if (uri == null) {
                            rejectPromise(requestCode, ERROR_NO_DATA, "No data getData");
                            return;
                        }
                        resolvePromise(requestCode, getFileInfo(uri));
                    } catch (Exception e) {
                        rejectPromise(requestCode, ERROR_FATAL, e);
                    }
                    break;
                case FILES_PICKER_METHOD_TYPE:
                    try {
                        WritableArray result = Arguments.createArray();
                        if (data.getData() != null) {
                            result.pushMap(getFileInfo(data.getData()));
                        } else {
                            ClipData clipData = data.getClipData();
                            if (clipData == null) {
                                rejectPromise(requestCode, ERROR_NO_DATA, "No data getClipData");
                                return;
                            }

                            for (int i = 0; i < clipData.getItemCount(); i++) {
                                ClipData.Item item = clipData.getItemAt(i);
                                result.pushMap(getFileInfo(item.getUri()));
                            }
                        }
                        resolvePromise(requestCode, result);
                    } catch (Exception e) {
                        rejectPromise(requestCode, ERROR_FATAL, e);
                    }
                    break;
                default:
                    rejectPromise(requestCode, ERROR_FATAL, "Invalid method methodType " + methodType);
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }


}