import * as bleTypeAction from 'flux/ble/bleTypeAction';
import * as bleType from 'flux/ble/bleType';

const initialState = {
	managerStatus: bleType.BLE_STATE_UNKNOWN,
};

/*
  TODO
  Create action to remove properly notifier managerhandler when app is going to be killed or shutdown
*/

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

		default:
			return state;
	}
}
