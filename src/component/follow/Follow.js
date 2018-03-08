import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import { TouchableHighlight } from 'react-native';
import { AppRegistry, Image } from 'react-native';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

type Props = {};


const list = [
{
  name: '    Conjugaison : passé simple',
  avatar_url: 'https://www.toutelasignaletique.com/21415-large_default/lettre-f-en-aluminium-decoupe-couleur-et-dimension-au-choix.jpg',
},
{
    name: '    Mathématiques : division',
    avatar_url: 'https://www.toutelasignaletique.com/21457-large_default/lettre-m-en-aluminium-decoupe-dimensions-et-coloris-au-choix.jpg',
  },
  {
    name: '    Anglais : se présenter',
    avatar_url: 'http://www.coloringbpr.com/wp-content/uploads/2017/01/alphabet_block_letter_coloring_pages.jpg',
  },
  {
    name: '    Sciences : les états',
    avatar_url: 'http://www.creavea.com/produits/10252-l/miroir-adhesif-lettre-s-majuscule-33-cm-l.jpg',
  },
]

export default class Follow extends Component<props> {

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ]
  };

  constructor(props){
    super(props);
    this._clickOnButton = this._clickOnButton.bind(this);
  }


  _clickOnButton(){
      this.props.navigator.push({
      screen: 'dune.profile',
      title: 'Etudiant',
      subtitle: 'Flo',
      navigatorButtons: {
        leftButtons: [
          {
            id: 'back',
          },
        ],
      },
    });
  }

  render() {

    const items = [
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
          { name: 'Flow Stoo', code: '#E3F2FD' }, { name: 'Flow Stoo', code: '#E3F2FD' },
        ];


    return (
      <View style={styles.color}>
      <View style={{flexDirection: 'row',
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        marginTop: 20,
        opacity: 0.7}}>
        <Text style={{
          fontSize:25}}>
          Dernières parties jouées
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <List containerStyle={{marginTop: 0}}>
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
      </ScrollView>

      <View style={{flexDirection: 'row',
              backgroundColor: '#E3F2FD',
              justifyContent: 'center',
              marginTop: 170,
              opacity: 0.7}}>
                <Text style={{
              fontSize:25}}>
                  Trombinoscope
                </Text>
              </View>


      <ScrollView style={styles.trombi}>
      <GridView
        itemDimension={80}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableHighlight onPress={this._clickOnButton.bind()}
           underlayColor="">
            <Image
              style={{width: 50, height: 50, borderRadius: 20, marginLeft: 17, marginBottom: 10}}
              source={{uri: 'https://cdn.local.epitech.eu/userprofil/commentview/florian.maisonnave.jpg'}}
            />
            </TouchableHighlight>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />
      </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  trombi: {
    position: 'absolute',
    top: 280,
    left: 40,
    width: 340,
    height: 300,
  },

  gridView: {
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 100,
    },
    itemName: {
      textAlign: 'center',
      marginBottom: 2,
      fontSize: 12,
      color: '#51bfc4',
      fontWeight: '600',
    },






  color: {
    flex: 1,
    backgroundColor: '#51bfc4'
  },
  container: {
    position: 'absolute',
    top: 85,
    left: 40,
    width: 340,
    height: 111,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
