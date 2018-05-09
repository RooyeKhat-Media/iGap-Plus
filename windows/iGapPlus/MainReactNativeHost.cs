using ReactNative;
using ReactNative.Modules.Core;
using Cl.Json.RNShare;
using RNSoundModule;
//using iGapPlus.RNSaveTo;
using iGapPlus.RNIGFileSystem;
using RNSqlite2;
using ReactNative.Shell;
using System.Collections.Generic;

namespace iGapPlus
{
    class MainReactNativeHost : ReactNativeHost
    {
        public override string MainComponentName => "iGapPlus";

#if !BUNDLE || DEBUG
        public override bool UseDeveloperSupport => true;
#else
        public override bool UseDeveloperSupport => false;
#endif

        protected override string JavaScriptMainModuleName => "index";

#if BUNDLE
        protected override string JavaScriptBundleFile => "ms-appx:///ReactAssets/index.windows.bundle";
#endif

        protected override List<IReactPackage> Packages => new List<IReactPackage>
        {
            new MainReactPackage(),
            new RNSharePackage(),
            new RNSoundPackage(),
            //new RNSaveToPackage(),
            new RNIGFileSystemPackage(),
            new RNSqlite2Package(),
        };
    }
}
