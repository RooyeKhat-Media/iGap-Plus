using System.IO;
using System.Threading;

namespace iGapPlus.RNFileSystem
{
    class FileWrapper
    {
        private static int atomicRefId = 0;

        private int _refId;

        public int refId
        {
            get { return _refId; }
        }

        private Stream _fileStream;

        public Stream fileStream
        {
            get { return _fileStream; }
        }

        private string _futureAccessListToken;

        public string futureAccessListToken
        {
            get { return _futureAccessListToken; }
        }


        public FileWrapper(Stream fileStream)
        {
            _refId = Interlocked.Increment(ref atomicRefId);
            _fileStream = fileStream;
        }

        public FileWrapper(Stream fileStream,string futureAccessListToken)
        {
            _refId = Interlocked.Increment(ref atomicRefId);
            _fileStream = fileStream;
            _futureAccessListToken = futureAccessListToken;
        }


    }
}
