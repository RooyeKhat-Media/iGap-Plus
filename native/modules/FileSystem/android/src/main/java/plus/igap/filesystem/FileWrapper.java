package plus.igap.filesystem;

import android.util.Log;

import java.io.FileOutputStream;
import java.io.RandomAccessFile;
import java.nio.channels.FileChannel;
import java.util.concurrent.atomic.AtomicInteger;

public class FileWrapper {
    private static final AtomicInteger atomicRefId = new AtomicInteger();

    private int refId;
    private FileChannel inputStreamChannel;
    private FileOutputStream fileOutputStream;
    private RandomAccessFile randomAccessFile;

    FileWrapper(RandomAccessFile randomAccessFile) {
        refId = atomicRefId.incrementAndGet();
        this.randomAccessFile = randomAccessFile;

    }

    FileWrapper(FileOutputStream fileOutputStream) {
        refId = atomicRefId.incrementAndGet();
        this.fileOutputStream = fileOutputStream;
    }

    int getRefId() {
        return refId;
    }

    RandomAccessFile getRandomAccessFile() {
        return randomAccessFile;
    }


    FileChannel getInputStreamChannel() throws Exception {
        if (inputStreamChannel == null || !inputStreamChannel.isOpen()) {

            if (randomAccessFile == null)
                throw new Exception("File is not readable");

            inputStreamChannel = randomAccessFile.getChannel();
        }

        return inputStreamChannel;
    }

    FileOutputStream getFileOutputStream() {
        return fileOutputStream;
    }

    void closeStream() {
        if (this.inputStreamChannel != null) {
            try {
                this.inputStreamChannel.close();
            } catch (Exception e) {
                Log.i("RNIGFileSystem", e.getMessage(), e);
            } finally {
                this.inputStreamChannel = null;
            }
        }

        if (this.randomAccessFile != null) {
            try {
                this.randomAccessFile.close();
            } catch (Exception e) {
                Log.i("RNIGFileSystem", e.getMessage(), e);
            } finally {
                this.randomAccessFile = null;
            }
        }

        if (this.fileOutputStream != null) {
            try {
                this.fileOutputStream.close();
            } catch (Exception e) {
                Log.i("RNIGFileSystem", e.getMessage(), e);
            } finally {
                this.fileOutputStream = null;
            }
        }
    }
}
