import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

type Props = {};
class Entry extends Component<Props> {

  render() {
    return (
      <View>
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
