import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { Colors } from 'utils/Style';
import TableCard from 'component/table/TableCard';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DrawerHeader extends Component {
  constructor() {
    super();

    this.state = {
      bluetoothMenuStatus: 'hidden',
    };
    this._onPressDropMenu = this._onPressDropMenu.bind(this);
  }

  render() {
    let bluetoothMenuIcon;
    if (this.state.bluetoothMenuStatus == 'hidden') {
      bluetoothMenuIcon = 'arrow-drop-down';
    } else {
      bluetoothMenuIcon = 'arrow-drop-up';
    }
    return [
      <ImageBackground
        key={'headerImage'}
        style={styles.headerImage}
        source={require('image/dune-bg.jpg')}>
        <View style={styles.headerOverlay}>
          <View style={styles.headerOverlayBody}>
            <Text style={styles.headerText}>
              Aucune table connectée
            </Text>
            <TouchableWithoutFeedback
              style={styles.headerDropMenu}
              onPress={this._onPressDropMenu}
              hitSlop={{top:40,bottom:40,right:40,left:40}}
            >
              <Icon
                name={bluetoothMenuIcon}
                size={26}
                color={Colors.WHITE}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ImageBackground>,
      this.state.bluetoothMenuStatus == 'visible' && <TableCard
        key={'headerBluetooth'}
        size={'small'}
      />,
    ];
  }

  _onPressDropMenu() {
    if (this.state.bluetoothMenuStatus == 'hidden') {
      this.setState({
        bluetoothMenuStatus: 'visible',
      });
    } else {
      this.setState({
        bluetoothMenuStatus: 'hidden',
      });
    }
  }
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 0,
    height: 160,
    alignSelf: 'stretch',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  headerOverlayBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  headerText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  headerDropMenu: {
    height: 30,
    height: 30,
  },
});
