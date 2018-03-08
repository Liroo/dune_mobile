import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableHighlight, Alert, Image, ToastAndroid} from 'react-native';

const _renderSeparator = () => (<View style={{ height: 1, backgroundColor: "#e5e5e5",}} />);

export default class GameList extends Component {
  state={
    data:[
      {title:'Addition', course:"Mathématiques", level:"Facile", picture:"https://lh3.googleusercontent.com/Qld2wiwf_d14YAgWFB7XCQvGWOtk4MHVZnx9uU7TBZTBXfnQBV1NFoaJqSkfznGylBQ=w300"},
      {title:'My house', course:"Anglais", level:"Moyen", picture:"https://s-media-cache-ak0.pinimg.com/originals/c4/62/26/c46226df82cdbe516fd7cce09d5d4440.png"},
      {title:'Cubes', course:"Logique", level:"Difficile", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK8ONFSjeAooYPdNaeJve-lw_-ETG70byMd_viCRVurYIl5WbGQ"},
      {title:'Molière', course:"Français", level:"Facile", picture:"https://s-media-cache-ak0.pinimg.com/originals/c4/62/26/c46226df82cdbe516fd7cce09d5d4440.png"},
      {title:'Soustraction', course:"Mathématiques", level:"Difficile", picture:"https://lh3.googleusercontent.com/Qld2wiwf_d14YAgWFB7XCQvGWOtk4MHVZnx9uU7TBZTBXfnQBV1NFoaJqSkfznGylBQ=w300"},
      {title:'Shakespeare', course:"Anglais", level:"Difficile", picture:"https://s-media-cache-ak0.pinimg.com/originals/c4/62/26/c46226df82cdbe516fd7cce09d5d4440.png"},
      {title:'Circle', course:"Logique", level:"Moyen", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK8ONFSjeAooYPdNaeJve-lw_-ETG70byMd_viCRVurYIl5WbGQ"},
      {title:'Les rois de France', course:"Culture", level:"Difficile", picture:"https://lh3.googleusercontent.com/_Ofe1l5kLKOZPctG4esWo4XYlbhnIQ5Lt34oRxSbsuQR_9Nr98oMdNM590iy9DSNHRsP=w300"},
      {title:'Trivial', course:"Quizz", level:"Easy", picture:"https://lh3.googleusercontent.com/_Ofe1l5kLKOZPctG4esWo4XYlbhnIQ5Lt34oRxSbsuQR_9Nr98oMdNM590iy9DSNHRsP=w300"},
      {title:'Langage Objet', course:"Programmation", level:"Facile", picture:"https://user-images.githubusercontent.com/12769365/29694825-add52b58-8904-11e7-8dce-e231b8de1dc9.png"},
    ]
  }
  render() {
    return(
      <View style={styles.containerList}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.title}
          renderItem={({item}) =>
          <TouchableHighlight onPress={() =>
              Alert.alert(
                'Confirmation',
                'Etes vous sur de vouloir lancer <' + item.title + '>  sur la table DUNE?',
                [
                  {text: 'NON', onPress: () => ToastAndroid.show('Lancement annulé', ToastAndroid.SHORT), style: 'cancel'},
                  {text: 'OUI', onPress: () => ToastAndroid.show('Jeu lancé sur la table DUNE', ToastAndroid.SHORT)},
                ],
                { cancelable: false }
              )}
              underlayColor='#e5e5e5'>
            <View style={styles.row}>
              <Image style={styles.iconList} source={{uri: item.picture}}/>
              <View style={styles.each}>
                <Text style={styles.primaryText}>
                  {item.title}
                </Text>
                <Text style={styles.secondaryText}>
                  {item.course + " - " + item.level}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        }
        ItemSeparatorComponent={_renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor:"#e5e5e5",
    borderRadius:10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius:10,
  },
  iconList: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 16,
    color: "grey"
  }
});
