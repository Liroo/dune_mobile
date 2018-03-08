import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import { AppRegistry, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TextInput, Alert, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import Identity from 'component/profile/StudentIdentity';
import Charts from 'component/profile/Charts';
import LastGame from 'component/profile/StudentLastGame';
import Modal from 'react-native-modal';
import Comment from 'component/profile/Comments';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Profile extends Component {

  _renderTitleIndicator() {
         return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
     }

     _renderDotIndicator() {
         return <PagerDotIndicator pageCount={3} />;
     }

     _renderTabIndicator() {
         let tabs = [{
                 text: 'Profil',
                 iconSource: require('../img/user.png'),
                 selectedIconSource: require('../img/user.png')
             },{
                 text: 'Statidtiques',
                 iconSource: require('../img/user.png'),
                 selectedIconSource: require('../img/user.png')
             },{
                 text: 'Derniers jeux',
                 iconSource: require('../img/user.png'),
                 selectedIconSource: require('../img/user.png')

         }];
         return <PagerTabIndicator tabs={tabs} />;
     }

  render() {
    return (
      <View style={{flex:1}}>

                <IndicatorViewPager
					style={{flex:1, backgroundColor:'white'}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={styles.viewBack}>
                      <View style={styles.title1}>
                        <Text style={{fontSize:25}}>
                          Profil de l{"'"}élève
                        </Text>
                      </View>
                      <View>
                        <Identity />
                      </View>
                      <View style={styles.titles}>
                      <Text style={{fontSize:22}}>
                        Commentaires
                      </Text>
                    </View>
                    <View>
                      <Comment/>
                    </View>
                    </View>

                    <View style={styles.viewBack}>
                    <View style={styles.title1}>
                      <Text style={{fontSize:22}}>
                        Statistiques
                      </Text>
                    </View>
                    <View style={styles.titles}>
                      <Text style={{fontSize:22}}>
                        Dernières parties
                      </Text>
                    </View>
                    <View>
                        <Charts/>
                    </View>
                    <View style={styles.titles}>
                      <Text style={{fontSize:22}}>
                        Evolution générale
                      </Text>
                    </View>
                    <View>
                        <Charts/>
                    </View>
                    </View>

                    <View style={styles.viewBack}>
                    <View style={styles.title1}>
                      <Text style={{fontSize:22}}>
                        Dernières parties jouées
                      </Text>
                    </View>
                    <View>
                        <LastGame/>
                        </View>
                    </View>

                </IndicatorViewPager>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 100,
    backgroundColor: 'white',
  },
  container1: {
    borderColor: '#d6d7da',
    flexDirection: 'row',
  },
  container2: {
    top: 40,
    left: 40,
    width: 340,
    height: 85,
  },
  viewBack: {
    backgroundColor: '#51bfc4',
  },
  title1:{
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    marginTop: 20,
    opacity: 0.7
  },
  titles:{
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    marginTop: 20,
    opacity: 0.7,
    marginLeft: 10,
    marginRight: 10
  },
  modal:{
    flex: 1,
    width: 100,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalContent: {
   backgroundColor: 'white',
   padding: 22,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
 },
 button: {
   backgroundColor: 'lightblue',
   padding: 12,
   margin: 16,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
 },
 modalContent: {
   backgroundColor: 'white',
   padding: 22,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
 },
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },
});
