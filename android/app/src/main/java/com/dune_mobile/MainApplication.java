package com.dune_mobile;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import com.polidea.reactnativeble.BlePackage;

import java.util.List;
import java.util.Arrays;

import com.oblador.vectoricons.VectorIconsPackage;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
            new BlePackage()
            , new VectorIconsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}
