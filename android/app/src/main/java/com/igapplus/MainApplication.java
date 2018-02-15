package com.igapplus;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.zxcpoiu.incallmanager.InCallManagerPackage;
import com.shahenlibrary.RNVideoProcessingPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.airbnb.android.react.maps.MapsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.oney.WebRTCModule.WebRTCModulePackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.reactlibrary.RNSoundRecorderPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.centaurwarchief.smslistener.SmsListenerPackage;
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
            new InCallManagerPackage(),
            new RNVideoProcessingPackage(),
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
    SoLoader.init(this, /* native exopackage */ false);
  }
}
