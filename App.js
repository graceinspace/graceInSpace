/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import store from "./js/store/index";
import { Provider } from "react-redux";

import { ViroVRSceneNavigator } from "react-viro";

import WelcomeScreen from "./js/WelcomeScreen";

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: "123EDACD-93B1-4066-87C2-3EF7662576A2"
};

// Sets the default scene you want for AR and VR

var InitialVRScene = require("./js/WelcomeScreen");

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class GraceInSpace extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
      loaded: false
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded = () => {
    this.setState({ loaded: true });
  };

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
      return this._getVRNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <Provider store={store}>
        <View style={localStyles.outer}>
          <View style={localStyles.inner}>
            {this.state.loaded ? (
              <View>
                <Text
                  style={{
                    fontFamily: "Futura-CondensedExtraBold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 50
                  }}
                >
                  Grace In Space
                </Text>
                <View style={{ width: 300 }}>
                  <Text style={localStyles.titleText}>
                    Grace the Alien was traveling through space for her annual
                    beach week with the girls when she dropped her bag! Can you
                    help her collect all her items before they float away?
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={this._getExperienceButtonOnPress(
                      VR_NAVIGATOR_TYPE
                    )}
                    underlayColor={"#68a0ff"}
                  >
                    <Text style={localStyles.buttonText}>NEXT</Text>
                  </TouchableHighlight>
                </View>
              </View>
            ) : (
              <View>
                <Text style={localStyles.loadingText}>Loading...</Text>
              </View>
            )}

            <Image
              style={{ width: 300, height: 333 }}
              source={require("./js/res/grace2.gif")}
              onLoadEnd={this.imageLoaded}
            />
          </View>
        </View>
      </Provider>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      />
    );
  }

  _getVRNavigator() {
    return (
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  image: {
    marginTop: 50
  },
  titleText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify"
  },
  loadingText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    // marginTop: 5,
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 40,
    width: 90,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
    // borderWidth: 1,
    // borderColor: '#fff',
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

module.exports = GraceInSpace;
