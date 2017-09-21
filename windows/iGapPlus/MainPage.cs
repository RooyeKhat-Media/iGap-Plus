using ReactNative;
using ReactNative.Modules.Core;
using iGapPlus.RNFileSystem;
using iGapPlus.RNWebSocket;
using ReactNative.Shell;
using System.Collections.Generic;

namespace iGapPlus
{
    class MainPage : ReactPage
    {
        public override string MainComponentName
        {
            get
            {
                return "iGapPlus";
            }
        }

#if BUNDLE
        public override string JavaScriptBundleFile
        {
            get
            {
                return "ms-appx:///ReactAssets/index.windows.bundle";
            }
        }
#endif

        public override List<IReactPackage> Packages
        {
            get
            {
                return new List<IReactPackage>
                {
                    new MainReactPackage(),
                    new RNFileSystemPackage(),
                    new RNWebSocketPackage(),
                };
            }
        }

        public override bool UseDeveloperSupport
        {
            get
            {
#if !BUNDLE || DEBUG
                return true;
#else
                return false;
#endif
            }
        }
    }

}
