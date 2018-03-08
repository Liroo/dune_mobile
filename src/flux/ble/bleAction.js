import * as bleTypeAction from 'flux/ble/bleTypeAction';
import * as bleType from 'flux/ble/bleType';

/*
  TODO
  Check how to keep the last connection, I was interested by
  https://polidea.github.io/react-native-ble-plx/#blemanageroptions and
  https://github.com/Polidea/react-native-ble-plx#readme.md (iOS install part, bullet 11)
  but I'm really not sure this is the solution, maybe this is a default behavior?
*/

export function initBle(manager) {
  return async function (dispatch, getState) {
    dispatch({
			type: bleTypeAction.BLE_MANAGER_STATUS_CHANGE,
      managerStatus: bleType.BLE_MANAGER_STATUS_UNKNOWN,
		});

    /*
      TODO FixIt

      subscription is actually undefined ending, this is not really a problem as the bluetooth notifier
      could run the whole lifetime of the app.. anyway we should care if there is any memory leak or unwanted behavior with this trick
    */
    manager.onStateChange((state) => {
      dispatch({
        type: bleTypeAction.BLE_MANAGER_STATUS_CHANGE,
        managerStatus: `ble.manager.status.${state.toLowerCase()}`,
      });
    }, true);

  }
}
