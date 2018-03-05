import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryGroup, VictoryLine, VictoryScatter } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class Charts extends Component {
  render() {
    return (
        <View style={styles.parentView}>
          <View style={styles.text1}>
          <VictoryPie width={180} height={180}
              colorScale={["tomato", "orange", "gold", "cyan" ]}
              data={[
                 { x: "OK", y: 35 },
                 { x: "KO", y: 40 },
               ]}/>
          </View>
          <View style={styles.text2}>
          <VictoryGroup
           width={180} height={180}
          data={[
             { x: "a", y: 35 },
             { x: "b", y: 40 },
             { x: "c", y: 20 },
             { x: "d", y: 70 },
           ]}
              color="#51bfc4"
            >
              <VictoryLine/>
              <VictoryScatter size={6} symbol="star"/>
            </VictoryGroup>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
parentView: {
  flexDirection: 'row',
  backgroundColor: 'white',
  marginTop: 20,
  marginRight: 20,
  marginLeft: 20,
  borderRadius: 20
},
titleView:{
},
text1:{
  flexDirection: 'row',
  alignItems: 'center'
},
text2:{
  flexDirection: 'row',
  alignItems: 'center'
},
borderView: {
 borderColor: '#d6d7da',
},
})
