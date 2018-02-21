import { Navigation } from 'react-native-navigation';

import { registerScreens } from 'src/screen';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'dune.test',
    title: 'Test',
  },
  animationType: 'slide-down'
});
