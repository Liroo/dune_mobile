import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Sizes } from 'utils/Style';

import DrawerHeader from 'component/drawer/DrawerHeader';
import DrawerListItem from 'component/drawer/DrawerListItem';

export default class Drawer extends Component {

  constructor() {
    super();

    this._onNavigateProfile = this._onNavigateProfile.bind(this);
    this._onNavigateFollow = this._onNavigateFollow.bind(this);
    this._onNavigateGames = this._onNavigateGames.bind(this);

    this._toggleOffDrawer = this._toggleOffDrawer.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader />
        <ScrollView style={styles.navigationScroll}>
          <DrawerListItem key={'profile'} navigator={this.props.navigator}
          label={'Profil'} icon={'assignment-ind'} onPress={this._onNavigateProfile} />
          <DrawerListItem key={'follow'} navigator={this.props.navigator}
          label={'Suivi'} icon={'gesture'} onPress={this._onNavigateFollow} />
          <DrawerListItem  key={'game'} navigator={this.props.navigator}
          label={'Jeu'} icon={'games'} onPress={this._onNavigateGames} />
        </ScrollView>
      </View>
    )
  }

  _onNavigateProfile() {
    this.props.navigator.push({
      screen: 'dune.profile',
      title: 'Profil',
      animated: false,
      backButtonHidden: true,
    });
    this._toggleOffDrawer();
  }

  _onNavigateFollow() {
    this.props.navigator.push({
      screen: 'dune.follow',
      title: 'Suivi',
      animated: false,
      backButtonHidden: true,
    });
    this._toggleOffDrawer();
  }

  _onNavigateGames() {
    this.props.navigator.push({
      screen: 'dune.game',
      title: 'Jeux',
      animated: false,
      backButtonHidden: true,
    });
    this._toggleOffDrawer();
  }

  _toggleOffDrawer() {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontWeight: Sizes.BOLD,
    fontSize: 40,
  },
  navigationScroll: {
    flex: 1,
    flexBasis: 1,
    height: 500,
    alignSelf: 'stretch',
    paddingTop: 5,
  },
});
