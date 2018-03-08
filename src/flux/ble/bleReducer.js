import * as bleTypeAction from 'flux/ble/bleTypeAction';
import * as bleType from 'flux/ble/bleType';

const initialState = {
	managerStatus: bleType.BLE_STATE_UNKNOWN,
	scanStatus: bleType.BLE_SCAN_STATUS_STOP,
};

export default function session(state = initialState, action = {}) {
	switch (action.type) {

    /*
      Reducer part linked to manager status, is it on, loading or off
    */
    case bleTypeAction.BLE_MANAGER_STATUS_CHANGE:
			return {
				...state,
				managerStatus: action.managerStatus,
			};

		case bleTypeAction.BLE_SCAN_START:
			return {
				...state,
				scanStatus: bleType.BLE_SCAN_STATUS_START,
			};

		case bleTypeAction.BLE_SCAN_STOP:
			return {
				...state,
				scanStatus: bleType.BLE_SCAN_STATUS_STOP,
			};

		default:
			return state;
	}
}
