import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GameList from 'component/game/Gamelist'

export default class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Bluetooth</Text>
        </View>
        <View style={styles.bluetooth} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Jeux disponibles</Text>
        </View>
        <View style={styles.gameList}>
          <GameList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5"
  },
  title: {
    backgroundColor: "#b2b2b2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginBottom:20
  },
  titleText: {
    fontSize: 20
  },
  bluetooth: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius:10,
    marginLeft:20,
    marginRight:20
    },
  gameList: {
    flex: 2,
    backgroundColor: '#e5e5e5',
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    borderRadius: 10
    },
});
