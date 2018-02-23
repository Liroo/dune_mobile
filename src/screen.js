import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
}
