import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import TableCard from 'component/table/TableCard';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

class Entry extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ]
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <TableCard />
        <Text>
          {this.props.managerStatus}
        </Text>
      </View>
    );
  }

}

function getFromStore(appState: indexReducerType) {
  return {
    managerStatus: appState.ble.managerStatus,
  };
}

export default connect(getFromStore, null)(Entry);
