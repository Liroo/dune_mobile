import React, { Component } from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Sizes } from 'utils/Style';

export default class Dummy extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ]
  };

  constructor() {
    super();

    this.state = {
      textColor: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const animation = Animated.sequence([
      Animated.timing(this.state.textColor, {
        toValue: 50,
        duration: 10000,
      }),
      Animated.timing(this.state.textColor, {
        toValue: 0,
        duration: 10000,
      }),
    ]);

    Animated.loop(animation).start();

  }

  render() {
    const interpolarTextColor = this.state.textColor.interpolate({
      inputRange: [0, 10, 20, 30, 40, 50],
      outputRange: [
        'rgb(250, 230, 163)',
        'rgb(180, 204, 148)',
        'rgb(121, 174, 142)',
        'rgb(77, 140, 134)',
        'rgb(55, 106, 116)',
        'rgb(47, 72, 88)',
      ],
    });

    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, {
          color: interpolarTextColor,
        }]}>
          Dummy component :)
        </Animated.Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: Sizes.BOLD,
    fontSize: 40,
  },
});
