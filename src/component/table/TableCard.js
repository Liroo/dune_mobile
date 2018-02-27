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
  textInfo: {
    color: Colors.DARK_TEXT,
    fontSize: 24,
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
    return (
      <View
        onPress={this._onPress}
        style={styles.cardContainer}
      >
        <Icon name="bluetooth" size={30} color={Colors.DARK_MIDDLE} style={styles.icon} />
        <View style={styles.bodyContainer}>
          <Text style={styles.textInfo}>
            Pas de table connectée
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={this._onPress} title={'Chercher'} style={buttonStyle} />
          </View>
        </View>
      </View>
    );
  }

  _onPress() {
  }
}

export default connect()(TableCard);
