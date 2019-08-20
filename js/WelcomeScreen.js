/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


import {
  ViroVRSceneNavigator,
} from 'react-viro';


/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"123EDACD-93B1-4066-87C2-3EF7662576A2",
}

// Sets the default scene you want for AR and VR
// var InitialVRScene = require('./js/HomeScreen');
var InitialVRScene = require('./SpaceScene');
var GameOverScreen = require('./GameOverScreen')
var FooterScreen = require('./FooterScreen')

var VR_NAVIGATOR_TYPE = "VR";
var UNSET = "UNSET";


// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class WelcomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      gameOver : false
    }
    // this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {

    if (this.state.navigatorType ==  VR_NAVIGATOR_TYPE) {
      return this._getVRNavigator();
    }
    if (this.state.gameOver == true) {
      return (<GameOverScreen />)
    }
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={{ fontFamily: 'Futura-CondensedExtraBold', color: 'white', textAlign: 'center', fontSize: 50 }}>
              Instructions:
            </Text>
            <View style={{width: 300}}>
              <Text style={localStyles.titleText}>Look around in space for Grace's items. When you see one, click on it to return it to her bag. Try to collect all ten before time runs out!</Text>
              <Text style={{color:'#fff',
              fontSize : 15, color: 'orange', paddingLeft: 10,
              paddingRight: 10, paddingBottom: 20}}>Don't forget to look up, down, left, right, and behind you!</Text>
            </View>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>START</Text>
          </TouchableHighlight>
          </View>
      </View>
    )
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (

      <View>
      <ViroVRSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}
        vrModeEnabled={false}/>
        <FooterScreen/>
      </View>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    // console.log('made it here')
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
    textAlign: 'center'
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
  },
  titleText: {
    paddingTop: 20,
    paddingBottom: 20,
    color:'#fff',
    fontSize : 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
  loadingText: {
    paddingTop: 20,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 40,
    width: 90,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor:'#4AC7CB',
    borderRadius: 10,
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = WelcomeScreen
