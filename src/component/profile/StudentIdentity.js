import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import { List, Image, FlatList, ListItem } from 'react-native';
import { Header } from 'react-native-elements';

export default class studentIdentity extends Component {
  render() {
    return (
      <View style={styles.parentView}>
          <View style={{width: 100, height: 50, flexDirection: 'row'}}>
            <Image
              source={require('image/flo.jpg')}
               style={styles.buttonText}
            />
          </View>
          <View style={styles.text1}>
            <Text>
              Florian
              {"\n"}
              Maisonnave
              {"\n"}
            </Text>
          </View>
          <View style={styles.text2}>
            <Text>
            19/08/1900
            {"\n"}
            CP
            </Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20
  },
  titleView:{
  },
  text1:{
    width: 100,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text2:{
    width: 100,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nestedButtonView: {
   paddingRight: 20,
   paddingLeft: 20,
 },
 buttonText: {
   width: 80,
   height: 80,
   borderRadius: 50
 },
 borderView: {
   borderColor: '#d6d7da',
 },
})
