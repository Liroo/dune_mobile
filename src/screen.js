import { Navigation } from 'react-native-navigation';

import Test from 'component/Test';

export function registerScreens() {
  Navigation.registerComponent('dune.test', () => Test);
}
