using System.IO;
using System.Threading;

namespace iGapPlus.RNIGFileSystem
{
    class FileWrapper
    {
        private static int atomicRefId = 0;

        private int _refId;

        public int refId
        {
            get { return _refId; }
        }

        private FileStream _fileStream;

        public FileStream fileStream
        {
            get { return _fileStream; }
        }


        public FileWrapper(FileStream fileStream)
        {
            _refId = Interlocked.Increment(ref atomicRefId);
            _fileStream = fileStream;
        }


    }
}
