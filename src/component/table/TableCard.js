import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CustomButton from 'component/global/CustomButton';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Sizes } from 'utils/Style';

import Ble from 'flux/Ble';

import {
  BLE_MANAGER_STATUS_UNKNOWN,
  BLE_MANAGER_STATUS_RESETTING,
  BLE_MANAGER_STATUS_UNSUPPORTED,
  BLE_MANAGER_STATUS_UNAUTHORIZED,
  BLE_MANAGER_STATUS_POWEREDOFF,
  BLE_MANAGER_STATUS_POWEREDON,

  BLE_SCAN_STATUS_START,
  BLE_SCAN_STATUS_STOP,
} from 'flux/ble/bleType';

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderColor: Colors.DIVIDER,
  },
  icon: {
    margin: 16,
    marginVertical: 24,
    marginRight: 24,
  },

  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 24,
    marginRight: 24,
  },
  textTitle: {
    color: Colors.DARK_TEXT,
    fontSize: 24,
  },
  textBody: {
    color: Colors.DARK_MIDDLE,
    fontSize: 16,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
});

const buttonStyle = StyleSheet.create({
  button: {},
  text: {
    fontWeight: Sizes.REGULAR,
    fontSize: 16,
    marginHorizontal: 8,
  },
});

class TableCard extends Component {
  constructor() {
    super();

    this._onPress = this._onPress.bind(this);
  }

  render() {
    let managerStatusText;
    let buttonDisabled;
    let iconName;
    let iconColor;
    let scanStatusText;

    switch (this.props.managerStatus) {
      case BLE_MANAGER_STATUS_UNKNOWN:
      case BLE_MANAGER_STATUS_UNSUPPORTED:
        buttonDisabled = true;
        managerStatusText = 'Votre mobile ne supporte pas notre technologie de connection à la table';
        iconName = 'bluetooth-disabled';
        iconColor = Colors.DARK_MIDDLE;
        break;
      case BLE_MANAGER_STATUS_UNAUTHORIZED:
        buttonDisabled = true;
        managerStatusText = 'Cliquer pour donner les permissions à l\'application';
        iconName = 'bluetooth-disabled';
        iconColor = Colors.DARK_MIDDLE;
        break;
      case BLE_MANAGER_STATUS_POWEREDOFF:
        buttonDisabled = true;
        managerStatusText = 'Merci d\'allumer le bluetooth manuellement';
        iconName = 'bluetooth-disabled';
        iconColor = Colors.DARK_MIDDLE;
        break;
      case BLE_MANAGER_STATUS_RESETTING:
        buttonDisabled = true;
        managerStatusText = 'Bluetooth en cours d\'initialisation';
        iconName = 'bluetooth';
        iconColor = Colors.DARK_MIDDLE;
        break;
      case BLE_MANAGER_STATUS_POWEREDON:
        buttonDisabled = false;
        managerStatusText = 'Bluetooth activé';
        iconName = 'bluetooth';
        iconColor = Colors.BLUETOOTH_ON;
        break;
      default:
        buttonDisabled = true;
        managerStatusText = 'null';
        iconName = 'bluetooth';
        iconColor = Colors.DARK_MIDDLE;
        break;
    };

    switch (this.props.scanStatus) {
      case BLE_SCAN_STATUS_START:
        scanStatusText = 'Recherche en cours...';
        buttonDisabled = true;
        iconName = 'bluetooth-searching';
        break;
      default:
        scanStatusText = 'Aucune table connectée';
    };

    return (
      <View
        onPress={this._onPress}
        style={styles.cardContainer}
      >
        <Icon name={iconName} size={30} color={iconColor} style={styles.icon} />
        <View style={styles.bodyContainer}>
          <Text style={styles.textTitle}>
            {scanStatusText}
          </Text>
          <Text style={styles.textBody}>
            {managerStatusText}
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              disabled={buttonDisabled}
              onPress={this._onPress}
              title={'Recherche automatique'}
              style={buttonStyle}
            />
          </View>
        </View>
      </View>
    );
  }

  _onPress() {
    Ble.startTableScan();
  }
}

function getFromStore(appState: indexReducerType) {
  return {
    managerStatus: appState.ble.managerStatus,
    scanStatus: appState.ble.scanStatus,
  };
}

export default connect(getFromStore, null)(TableCard);
