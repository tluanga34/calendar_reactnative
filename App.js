/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Icon from 'react-native-vector-icons/FontAwesome';
import { weekDayNames, weekDaysData } from './weekData'

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.scrollView]}>
          {/* <Header /> */}

          <View style={{ height: deviceHeight, justifyContent: "center" }}>
            <View style={{ paddingVertical: 40, paddingHorizontal: 20, backgroundColor: "#fff", marginVertical: 10, marginHorizontal: 10 }}>
              <View style={styles.monthCtrl}>
                <TouchableHighlight>
                  <Icon name="angle-left" size={25} color="#111" />
                </TouchableHighlight>
                <Text style={{ fontSize: 21, paddingHorizontal: 20 }}>November, 2019</Text>
                <TouchableHighlight>
                  <Icon name="angle-right" size={25} color="#111" />
                </TouchableHighlight>
              </View>

              <View style={[styles.weekGrid, styles.weekNames, { borderBottomWidth: 2, borderBottomColor: "#e1e1e1" }]}>
                {weekDayNames.map((weekName, index) => {
                  return (
                    <View key={index} style={styles.weekCell}>
                      <Text style={[styles.cellText, { fontSize: 13 }, styles.cellTextGrey]}>{weekName}</Text>
                    </View>
                  )
                })}
              </View>

              <View style={styles.weekGrid}>
                {weekDaysData.map((weekDayItem, index) => {
                  return (
                    <View key={index} style={styles.weekCell}>
                      <View style={[{borderRadius: 100, width: 35,  height: 35, alignItems: "center", justifyContent: "center", display: "flex"}, (weekDayItem.today)? {backgroundColor: "#ecedf1"} : {}]}>
                        <Text style={[styles.cellText, { fontSize: 15 }, (weekDayItem.otherMonth) ? styles.cellTextGrey : styles.cellTextBlack]}>{weekDayItem.label}</Text>
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  weekGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  weekNames: {
    marginBottom: 10
  },
  cellText: {
    fontWeight: "bold"
  },
  cellTextBlack: {
    color: "#111"
  },
  cellTextGrey: {
    color: "#e1e1e1"
  },
  weekCell: {
    width: "14%",
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  monthCtrl: {
    flexWrap: "nowrap",
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    backgroundColor: "#aaa",
    height: deviceHeight,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
