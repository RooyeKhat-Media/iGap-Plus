package iGap.Plus;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import com.crashlytics.android.ndk.CrashlyticsNdk;
import com.facebook.react.ReactApplication;
import plus.igap.videocompress.RNVideoCompressPackage;
import com.smixx.fabric.FabricPackage;
import com.zxcpoiu.incallmanager.InCallManagerPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.airbnb.android.react.maps.MapsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.oney.WebRTCModule.WebRTCModulePackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.reactlibrary.RNSoundRecorderPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.centaurwarchief.smslistener.SmsListenerPackage;
import io.fabric.sdk.android.Fabric;
import plus.igap.saveto.RNSaveToPackage;
import cl.json.RNSharePackage;
import dog.craftz.sqlite_2.RNSqlite2Package;
import plus.igap.filesystem.RNFileSystemPackage;
import plus.igap.websocket.RNWebSocketPackage;
import com.horcrux.svg.SvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNVideoCompressPackage(),
            new FabricPackage(),
            new InCallManagerPackage(),
            new ReactNativeContacts(),
            new MapsPackage(),
            new ReactVideoPackage(),
            new WebRTCModulePackage(),
            new RNSoundPackage(),
            new RNSoundRecorderPackage(),
            new RCTCameraPackage(),
            new SmsListenerPackage(),
            new RNSaveToPackage(),
            new RNSharePackage(),
            new RNSqlite2Package(),
            new RNFileSystemPackage(),
            new RNWebSocketPackage(),
            new SvgPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(this, new Crashlytics(), new CrashlyticsNdk());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
