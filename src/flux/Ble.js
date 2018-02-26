import { BleManager } from 'react-native-ble-plx';

import store from 'flux/redux';
import { changeBleState } from 'flux/ble/bleAction';

class Ble {
  constructor() {
    this._bleManager = new BleManager();
    this._bleManager.onStateChange(this._onBleStateChange, true);
  }

  _onBleStateChange(state) {
    store.dispatch(changeBleState(state));
  }
}

export default new Ble();
