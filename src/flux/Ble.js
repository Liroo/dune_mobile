import { BleManager } from 'react-native-ble-plx';

import store from 'flux/redux';
import {
  changeBleState,
  startScan,
  stopScan,
} from 'flux/ble/bleAction';

import {
  BLE_MANAGER_STATUS_POWEREDON,
} from 'flux/ble/bleType';

class Ble {
	constructor() {
		this._bleManager = new BleManager();
    this._tableDevice = null;

    this._onBleStateChange = this._onBleStateChange.bind(this);
		this._bleManager.onStateChange(this._onBleStateChange, true);
	}

	_onBleStateChange(state) {
    if (state != BLE_MANAGER_STATUS_POWEREDON) {
      this.stopTableScan();
    }

		store.dispatch(changeBleState(state));
	}

  startTableScan() {
    store.dispatch(startScan());

    // TODO
    // In case there is already a table connected, we should disconnect it

    if (store.getState().ble.managerStatus != BLE_MANAGER_STATUS_POWEREDON) {
      this.stopTableScan();
      return;
    }

    this._bleManager.startDeviceScan(null, { allowDuplicates: false }, (error, bleDevice) => {
      if (error) {
        console.warn("An error occurred while scanning", error)
        return
      }
      console.log(bleDevice);
      this.stopTableScan();
      return;
    });
  }

  stopTableScan() {
    this._bleManager.stopDeviceScan();
    store.dispatch(stopScan());
  }
}

export default new Ble();
