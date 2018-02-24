import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Test from 'component/Test';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.test', () => Test);
}
