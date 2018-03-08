import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import Follow from './Follow';
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

export default class Test extends Component<props> {

constructor(props){
  super(props);
  this._clickOnButton = this._clickOnButton.bind(this);
}


  _clickOnButton(){
      this.props.navigator.push({
      screen: 'dune.follow', // unique ID registered with Navigation.registerScreen
      title: undefined, // navigation bar title of the pushed screen (optional)
      subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
      titleImage: require('../image/dune.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      backButtonTitle: undefined, // override the back button title (optional)
      backButtonHidden: false, // hide the back button altogether (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
      // enable peek and pop - commited screen will have `isPreview` prop set as true.
      previewView: undefined, // react ref or node id (optional)
      previewHeight: undefined, // set preview height, defaults to full height (optional)
      previewCommit: true, // commit to push preview controller to the navigation stack (optional)
      previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
        id: '', // action id (required)
        title: '', // action title (required)
        style: undefined, // 'selected' or 'destructive' (optional)
        actions: [], // list of sub-actions
      }],
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
