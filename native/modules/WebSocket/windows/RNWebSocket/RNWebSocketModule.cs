using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace iGapPlus.RNWebSocket
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNWebSocketModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNWebSocketModule"/>.
        /// </summary>
        internal RNWebSocketModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNWebSocket";
            }
        }
    }
}
