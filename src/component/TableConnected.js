import React, { Component } from "react";
import { Icon } from 'react-native-elements';
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class TableConnected extends Component {

  render() {
    return (
<View style={styles.nestedButtonView}>
      <Icon
        raised
        name='bluetooth'
        type='Feather'
        color='#5bd125'
        reverse='true'
        onPress={() => console.log('hello')} />
        <Text style={styles.buttonText}>
          Votre appareil est connecté à la table:
          {"\n"}
          Dune-Table01
        </Text>
        </View>
          );
        }
}

const styles = StyleSheet.create({
  nestedButtonView: {
   flexDirection: 'row',
   alignItems: 'center',
   fontSize: 100,
   borderColor: '#d6d7da',
   borderWidth: 0.5,
   borderRadius: 6,
   backgroundColor: 'white'

 },
 buttonText: {
   flex: 1,
   paddingRight: 40,
   textAlign: 'center',
 },
 borderView: {
   borderColor: '#d6d7da',
 }
})
