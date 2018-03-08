import { PixelRatio } from 'react-native';

const Colors = {
  DARK_MIDDLE: '#737373',
  DARK_TEXT: '#212121',
  DARK: '#000000',

  WHITE: '#FFFFFF',

  BLUETOOTH_ON: '#2196F3',

  DIVIDER: '#E7E7E7',

  TRANSPARENT: 'rgba(0, 0, 0, 0)',
};

const Sizes = Object.freeze({
  BASE: 16,
  ONE_PIXEL: 1 /  PixelRatio.get(),
  NAVIGATOR_HEIGHT: 56,
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '600',

  SUBHEADER_FONT_SIZE: 16,

  NB_TABS: 5,

  TABLET_MAX_WIDTH: 500,
  TABLET_SPLIT_WIDTH: 375,
  TABLET_ACTION_SHEET_WIDTH: 400,
});

export { Colors, Sizes };
