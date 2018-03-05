import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Game from 'component/Launcher_game';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.game', () => Game, store, provider);
}
