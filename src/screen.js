import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Dummy from 'component/global/Dummy';
import Drawer from 'component/drawer/Drawer';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.drawer', () => Drawer, store, provider);

  Navigation.registerComponent('dune.dummy', () => Dummy, store, provider);

  Navigation.registerComponent('dune.profile', () => Dummy, store, provider);
  Navigation.registerComponent('dune.follow', () => Dummy, store, provider);
  Navigation.registerComponent('dune.game', () => Dummy, store, provider);
}
