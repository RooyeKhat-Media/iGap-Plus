using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace iGapPlus.RNSaveTo
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSaveToModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSaveToModule"/>.
        /// </summary>
        internal RNSaveToModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSaveTo";
            }
        }
    }
}
