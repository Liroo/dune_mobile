import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import IsConnected from './TableConnected';
import ManageTables from './ManageTables'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class Home extends Component {

  render() {
    return (

    <View style={styles.viewBack}>

      <View style={styles.container1}>

        <IsConnected />

      </View>

      <View style={styles.container2}>

        <ManageTables />

      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({

  container1: {
    top: 40,
    left: 40,
    width: 340,
    height: 85,
  },
  container2: {
    top: 40,
    left: 40,
    width: 340,
    height: 85,
  },
  viewBack: {
    backgroundColor: '#FFE699',
    flex:1,
  }

})
