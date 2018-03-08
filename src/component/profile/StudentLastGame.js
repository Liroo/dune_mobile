import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, SectionList, Image, ScrollView, List } from "react-native";
import { Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryGroup, VictoryLine, VictoryScatter } from "victory-native";


const _renderItem = ({ item }) => (
  <UserRow
    name={item.game}
    date={item.date}
  />
);

UserRow = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={require('../img/compte.png')}/>
    <View>
      <Text style={styles.primaryText}>
        {props.name}
      </Text>
      <Text style={styles.secondaryText}>{props.date}</Text>
    </View>
  </View>
);

UserList = props => (
  <FlatList
  data={props.data}
  renderItem={_renderItem}
  keyExtractor={item => item.email}
/>
);

const sampleData = [
  {
    game: "Compte Compte",
    date: "partie jouée le 01/03/2018"
  },
  {
    game: "Compte Compte",
    date: "partie jouée le 01/03/2018"
  },
  {
    game: "Compte Compte",
    date: "partie jouée le 01/03/2018"
  },
  {
    game: "Compte Compte",
    date: "partie jouée le 01/03/2018"
  },
  {
    game: "Compte Compte",
    date: "partie jouée le 01/03/2018"
  }
];

export default class StudentLastGame extends Component {
  render() {
    return (
      <View style={styles.parentView}>
         <UserList data={sampleData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,
    flexDirection: 'row',
    alignItems: 'center' } ,
  parentView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    height: 380,
  },
  titleView:{
  },
  row: { flexDirection: "row", alignItems: "center", padding: 12 },
    picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
    primaryText: {
      fontWeight: "bold",
      color: "black",
      marginBottom: 4
    },
    secondaryText: { color: "grey" }
  });
