import { Platform } from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'src/screen';

import store from 'flux/redux';
import { Provider } from 'react-redux';

import Ble from 'flux/Ble';

registerScreens(store, Provider);

export default class App {
  constructor() {

    /*
      TODO
      This is not ok, we should listen flux notification when app is ready to be launch, and if we should launch
      login screen or whatever screen we need to launch...
    */
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'dune.entry',
        title: 'Dune',
      },
      drawer: {
        left: {
          screen: 'dune.drawer',
          fixedWidth: 850,
        },
        style: {
          drawerShadow: true,
        }
      }
    });
  }
}
