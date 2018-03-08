import { Navigation } from 'react-native-navigation';

import Entry from 'component/Entry';
import Drawer from 'component/drawer/Drawer';

import Dummy from 'component/global/Dummy';

import Follow from 'component/follow/Follow';
import Profile from 'component/profile/Profile';
import Game from 'component/game/Game';

export function registerScreens(store, provider) {
  Navigation.registerComponent('dune.entry', () => Entry, store, provider);
  Navigation.registerComponent('dune.drawer', () => Drawer, store, provider);

  Navigation.registerComponent('dune.dummy', () => Dummy, store, provider);

  Navigation.registerComponent('dune.profile', () => Profile, store, provider);
  Navigation.registerComponent('dune.follow', () => Follow, store, provider);
  Navigation.registerComponent('dune.game', () => Game, store, provider);
}
