import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Home from 'component/Home';
import Follow from 'component/Follow';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.home', () => Home, store, provider);
  Navigation.registerComponent('dune.follow', () => Follow, store, provider);
}
