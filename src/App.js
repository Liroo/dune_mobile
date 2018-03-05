import { Platform } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'src/screen';

import store from 'flux/redux';
import { Provider } from 'react-redux';

import { BleManager } from 'react-native-ble-plx';
import { initBle } from 'flux/ble/bleAction';

registerScreens(store, Provider);

export default class App {
  constructor() {
    /*
      TODO
      Where this constructor should be created? mhhh
      Is this the real place?
      And actually, should we store it?
      So many questions...
    */
    this.manager = new BleManager();
    store.dispatch(initBle(this.manager));

    /*
      TODO
      This is not ok, we should listen flux notification when app is ready to be launch, and if we should launch
      login screen or whatever screen we need to launch...
    */
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'dune.game',
        title: 'Liste des jeux',
      },
    });
  }
}
