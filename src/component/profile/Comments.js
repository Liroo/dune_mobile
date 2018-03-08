import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import { AppRegistry, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, TextInput, Alert, TouchableOpacity, FlatList, Image } from "react-native";
import { Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import Identity from 'component/profile/StudentIdentity';
import Charts from 'component/profile/Charts';
import LastGame from 'component/profile/StudentLastGame';
import Modal from 'react-native-modal';

const renderItem = ({ item }) => (
  <CommentRow
    name={item.nom}
    comment={item.comment}
  />
);

CommentRow = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={require('image/gadrat.jpg')}/>
    <View>
      <Text style={styles.primaryText}>
        {props.name}
      </Text>
      <View style={{width: 285}}>
      <Text style={styles.secondaryText}>{props.comment}</Text>
      </View>
    </View>
  </View>
);

CommentList = props => (
  <FlatList
  data={props.data}
  renderItem={renderItem}
  keyExtractor={item => item.comment}
/>
);

const Data = [
  {
    nom: "Romain Gadrat",
    comment: "Florian est un élève qui fait beaucoup d'efforts et cela se ressent dans ses résultats"
  },
  {
    nom: "Romain Gadrat",
    comment: "Florian devrai cesser de trop jouer à Starcraft cela nuit à sa scolarité"
  },
];

export default class Comments extends Component {

  state = {
    modalVisible: false,
  };

  stateInput = "";

  constructor(props) {
    super(props);
    this.stateInput = {text: ''};
  }

  setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }

_renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

_renderModalContent = () => (
  <View style={styles.modalContent}>
  <TextInput
  multiline={true}
   numberOfLines={4}
      style={{height: 100, width: 300, borderRadius: 10}}
    />
    <View style={{flexDirection: 'row'}}>
    {this._renderButton('Envoyer', () => this.setState({ visibleModal: null }))}
    {this._renderButton('Annuler', () => this.setState({ visibleModal: null }))}
    </View>
  </View>
);

  render() {
    return (
      <View>
        <View>
        <View style={styles.parentView}>
          <CommentList data={Data} />
        </View>
          <Modal
            isVisible={this.state.visibleModal === 2}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
          >
            {this._renderModalContent()}
          </Modal>
        </View>
        <View style={{marginLeft: 40, marginRight: 40}}>
          {this._renderButton('Rédiger un commentaire', () => this.setState({ visibleModal: 2 }))}
        </View>
      </View>
    )};
}

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    height: 150
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
row: { flexDirection: "row", alignItems: "center", padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 4
  },
  secondaryText: { color: "grey" }
});
