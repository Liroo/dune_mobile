import React, { Component } from "react";
import { Icon } from 'react-native-elements';
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from 'react-native-elements';


const list = [
  {
    name: 'Dune-Table01',
    icon: 'square'
  },
  {
    name: 'Dune-Table02',
    icon: 'square'
  },
]

export default class ManageTables extends Component {

  render() {
    return (

<View ContainerStyle={styles.container}>
      <List containerStyle={{marginBottom: 20}}>
    {
      list.map((l, i) => (
        <ListItem
          roundAvatar
          avatar={{uri:l.avatar_url}}
          key={i}
          title={l.name}
        />
      ))
    }
  </List>
  </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
   borderColor: '#d6d7da',
   borderWidth: 0.5,
   borderRadius: 6,
   backgroundColor: 'white'

 },
});
