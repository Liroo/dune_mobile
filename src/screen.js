import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Home from 'component/Home';
import Follow from 'component/Follow';
import Game from 'component/Launcher_game';
import Suivi from 'component/Suivi';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.home', () => Home, store, provider);
  Navigation.registerComponent('dune.follow', () => Follow, store, provider);
  Navigation.registerComponent('dune.game', () => Game, store, provider);
  Navigation.registerComponent('dune.suivi', () => Suivi, store, provider);
}
