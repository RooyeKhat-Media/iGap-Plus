using Newtonsoft.Json.Linq;
using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Windows.Security.Cryptography;
using Windows.Security.Cryptography.Core;
using Windows.Storage;
using Windows.Storage.AccessCache;
using Windows.Storage.Pickers;
using Windows.Storage.Streams;

namespace iGapPlus.RNFileSystem
{
    class RNFileSystemModule : ReactContextNativeModuleBase
    {
        private Dictionary<int, FileWrapper> files= new Dictionary<int, FileWrapper>();

        private const String ERROR_NO_DATA = "ERROR_NO_DATA";
        private const String ERROR_FATAL = "ERROR_FATAL";

        static class Fields
        {
            public static String FILE_URI = "fileUri";
            public static String FILE_NAME = "fileName";
            public static String FILE_SIZE = "fileSize";
        }

        private const int FILE_OPEN_MODE_READ = 0;
        private const int FILE_OPEN_MODE_WRITE = 1;

        public RNFileSystemModule(ReactContext reactContext)
            : base(reactContext)
        {
            StorageApplicationPermissions.FutureAccessList.Clear();
        }

        public override string Name
        {
            get
            {
                return "RNFileSystem";
            }
        }

        public override IReadOnlyDictionary<string, object> Constants
        {
            get
            {
                return new Dictionary<string, object>
                {
                    { "read", FILE_OPEN_MODE_READ },
                    { "write", FILE_OPEN_MODE_WRITE },
                };
            }
        }

        private async Task<JObject> getFileInfo(StorageFile file)
        {
            string token = StorageApplicationPermissions.FutureAccessList.Add(file);
            var basicProperties = await file.GetBasicPropertiesAsync();
            var length = basicProperties.Size;

            var jObject = new JObject();
            jObject.Add(Fields.FILE_SIZE, length);
            jObject.Add(Fields.FILE_NAME, file.Name);
            jObject.Add(Fields.FILE_URI, token);

            return jObject;
        }

        [ReactMethod]
        public void filePicker(string[] fileTypes, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(async () => {
                FileOpenPicker openPicker = new FileOpenPicker();

                openPicker.ViewMode = PickerViewMode.Thumbnail;
                openPicker.SuggestedStartLocation = PickerLocationId.PicturesLibrary;
                foreach (string fileType in fileTypes)
                {
                    openPicker.FileTypeFilter.Add(fileType);
                }

                StorageFile file = await openPicker.PickSingleFileAsync();
                if (file != null)
                {
                    var jObject = await getFileInfo(file);
                    promise.Resolve(jObject);
                }
                else
                {
                    promise.Reject(ERROR_NO_DATA, "Operation cancelled.");
                }
            });
        }

        [ReactMethod]
        public void filesPicker(string[] fileTypes, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(async () => {
                FileOpenPicker openPicker = new FileOpenPicker();

                openPicker.ViewMode = PickerViewMode.Thumbnail;
                openPicker.SuggestedStartLocation = PickerLocationId.PicturesLibrary;
                foreach (string fileType in fileTypes)
                {
                    openPicker.FileTypeFilter.Add(fileType);
                }

                IReadOnlyList<StorageFile> files = await openPicker.PickMultipleFilesAsync();
                if (files.Count > 0)
                {
                    var jArray = new JArray();
                    foreach (StorageFile file in files)
                    {
                        var jObject = await getFileInfo(file);
                        jArray.Add(jObject);
                    }
                    promise.Resolve(jArray);
                }
                else
                {
                    promise.Reject(ERROR_NO_DATA, "Operation cancelled.");
                }
            });
        }

        [ReactMethod]
        public void fInfo(string fileUri, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(async () => {
                    try
                    {
                        StorageFile file;

                        if (StorageApplicationPermissions.FutureAccessList.ContainsItem(fileUri))
                        {
                            file = await StorageApplicationPermissions.FutureAccessList.GetFileAsync(fileUri);
                        }
                        else
                        {
                            file = await StorageFile.GetFileFromPathAsync(@fileUri);
                        }

                        var jObject = await getFileInfo(file);

                        promise.Resolve(jObject);
                    }
                    catch (Exception e)
                    {
                        promise.Reject(ERROR_FATAL, e);
                    }
                });
            });
        }

        [ReactMethod]
        public void fOpen(string fileUri, int mode, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(async () => {
                    try
                    {
                        FileWrapper fileWrapper;
                        Stream fileStream;

                        if (StorageApplicationPermissions.FutureAccessList.ContainsItem(fileUri))
                        {
                            StorageFile file = await StorageApplicationPermissions.FutureAccessList.GetFileAsync(fileUri);

                            switch (mode)
                            {
                                case FILE_OPEN_MODE_READ:
                                    fileStream = await file.OpenStreamForReadAsync();
                                    fileWrapper = new FileWrapper(fileStream, fileUri);
                                    break;
                                case FILE_OPEN_MODE_WRITE:
                                    fileStream = await file.OpenStreamForWriteAsync();
                                    fileStream.Seek(0, SeekOrigin.End);
                                    fileWrapper = new FileWrapper(fileStream, fileUri);
                                    break;
                                default:
                                    throw new ArgumentException("Invalid open mode " + mode);
                            }
                        }
                        else
                        {
                            switch (mode)
                            {
                                case FILE_OPEN_MODE_READ:
                                    fileStream = new FileStream(@fileUri, FileMode.Open, FileAccess.Read);
                                    fileWrapper = new FileWrapper(fileStream);
                                    break;
                                case FILE_OPEN_MODE_WRITE:
                                    fileStream = new FileStream(@fileUri, FileMode.Append, FileAccess.Write);
                                    fileWrapper = new FileWrapper(fileStream);
                                    break;
                                default:
                                    throw new ArgumentException("Invalid open mode " + mode);
                            }
                        }

                        files.Add(fileWrapper.refId, fileWrapper);
                        promise.Resolve(fileWrapper.refId);
                    }
                    catch (Exception e)
                    {
                        promise.Reject(ERROR_FATAL,e);
                    }
                });
            });
        }

        [ReactMethod]
        public void fRead(int refId, double offset, int limit, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(() => {
                    try
                    {
                        FileWrapper fileWrapper;

                        if (!files.TryGetValue(refId, out fileWrapper))
                            throw new Exception("Invalid refId");

                        Stream fileStream = fileWrapper.fileStream;

                        if (!fileStream.CanRead)
                            throw new Exception("File is not readable");

                        byte[] buffer = new byte[limit];
                        fileStream.Seek((long)offset, SeekOrigin.Begin);
                        fileStream.Read(buffer, 0, limit);
                        promise.Resolve(Convert.ToBase64String(buffer));
                    }
                    catch (Exception e)
                    {
                        promise.Reject(ERROR_FATAL, e);
                    }
                });
            });
        }

        [ReactMethod]
        public void fSha256(int refId, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(async () => {
                    try
                    {
                        FileWrapper fileWrapper;

                        if (!files.TryGetValue(refId, out fileWrapper))
                            throw new Exception("Invalid refId");

                        Stream fileStream = fileWrapper.fileStream;

                        if (!fileStream.CanRead)
                            throw new Exception("File is not readable");

                        uint capacity = 8192;
                        Windows.Storage.Streams.Buffer buffer = new Windows.Storage.Streams.Buffer(capacity);

                        HashAlgorithmProvider alg = HashAlgorithmProvider.OpenAlgorithm(HashAlgorithmNames.Sha256);
                        CryptographicHash hash = alg.CreateHash();

                        IInputStream inputStream = fileStream.AsInputStream();
                        while (true)
                        {
                            await inputStream.ReadAsync(buffer, capacity, InputStreamOptions.None);
                            if (buffer.Length > 0)
                                hash.Append(buffer);
                            else
                                break;
                        }


                        promise.Resolve(CryptographicBuffer.EncodeToBase64String(hash.GetValueAndReset()));
                    }
                    catch (Exception e)
                    {
                        promise.Reject(ERROR_FATAL, e);
                    }
                });
            });
        }

        [ReactMethod]
        public void fAppend(int refId, string base64String, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(() => {
                    try
                    {
                        FileWrapper fileWrapper;

                        if (!files.TryGetValue(refId, out fileWrapper))
                            throw new Exception("Invalid refId");

                        Stream fileStream = fileWrapper.fileStream;

                        if (!fileStream.CanWrite)
                            throw new Exception("File is not writable");

                        byte[] content = Convert.FromBase64String(base64String);
                        fileStream.Write(content,0, content.Length);
                        fileStream.Flush();
                        promise.Resolve(null);
                    }
                    catch (Exception e)
                    {
                        promise.Reject(ERROR_FATAL, e);
                    }
                });
            });
        }

        [ReactMethod]
        public void fClose(int refId, IPromise promise)
        {
            DispatcherHelpers.RunOnDispatcher(() => {
                Task.Run(() => {
                    FileWrapper fileWrapper;

                    if (!files.TryGetValue(refId, out fileWrapper))
                    {
                        files.Remove(refId);

                        Stream fileStream = fileWrapper.fileStream;
                        fileStream.Dispose();

                        if (fileWrapper.futureAccessListToken!=null && StorageApplicationPermissions.FutureAccessList.ContainsItem(fileWrapper.futureAccessListToken))
                        {
                            StorageApplicationPermissions.FutureAccessList.Remove(fileWrapper.futureAccessListToken);
                        }
                    }
                    promise.Resolve(null);
                });
            });
        }



        [ReactMethod]
        public void getFilesDir(IPromise promise)
        {
            promise.Resolve(ApplicationData.Current.LocalCacheFolder.Path);
        }
    }
}
