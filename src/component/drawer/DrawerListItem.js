import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Sizes } from 'utils/Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DrawerListItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          style={styles.touchableContainer}
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.props.onPress}
        >
          <View style={styles.touchableBody}>
            <Icon style={styles.icon} name={this.props.icon} size={22} color={Colors.DARK_MIDDLE}/>
            <Text style={styles.label}>
              {this.props.label}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignSelf: 'stretch',
    paddingVertical: 4,
  },
  touchableContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  touchableBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    margin: 15,
  },
  label: {
    color: Colors.DARK_TEXT,
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 20,
  },
});
