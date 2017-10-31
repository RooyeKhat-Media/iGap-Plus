using ReactNative;
using ReactNative.Modules.Core;
using iGapPlus.RNSaveTo;
using Cl.Json.RNShare;
using iGapPlus.RNFileSystem;
using RNSqlite2;
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

        public override string JavaScriptMainModuleName
        {
            get
            {
                return "index";
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
                    new RNSaveToPackage(),
                    new RNSharePackage(),
                    new RNFileSystemPackage(),
                    new RNSqlite2Package(),
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
