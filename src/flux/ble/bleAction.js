import * as bleTypeAction from 'flux/ble/bleTypeAction';
import * as bleType from 'flux/ble/bleType';

/*
  TODO
  Check how to keep the last connection, I was interested by
  https://polidea.github.io/react-native-ble-plx/#blemanageroptions and
  https://github.com/Polidea/react-native-ble-plx#readme.md (iOS install part, bullet 11)
  but I'm really not sure this is the solution, maybe this is a default behavior?
*/

export function changeBleState(state) {
  return async function (dispatch, getState) {
    dispatch({
      type: bleTypeAction.BLE_MANAGER_STATUS_CHANGE,
      managerStatus: `ble.manager.status.${state.toLowerCase()}`,
    });
  }
}

export function startScan() {
  return async function (dispatch, getState) {
    dispatch({
      type: bleTypeAction.BLE_SCAN_START,
    });
  }
}

export function stopScan() {
  return async function (dispatch, getState) {
    dispatch({
      type: bleTypeAction.BLE_SCAN_STOP,
    });
  }
}
