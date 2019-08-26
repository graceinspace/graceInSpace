import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { ViroVRSceneNavigator } from "react-viro";
import store from "./store/index";
import { Provider, connect } from "react-redux";
import { changeToSpace, changeToUnset } from "./store/gameActions";
import { secretKey } from "../secrets";

const sharedProps = {
  apiKey: secretKey
};

const InitialVRScene = require("./HelloWorldScene");
const FooterScreen = require("./FooterScreen");
const GameLostScreen = require("./GameLostScreen");
const GameWonScreen = require("./GameWonScreen");
const FooterLoading = require("./FooterLoading");

export default class WelcomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: sharedProps,
      showSceneItems: false
    };
    this._getVRNavigator = this._getVRNavigator.bind(this);
  }

  render() {
    if (
      this.props.navigation == "space" &&
      this.props.gameWon === false &&
      this.props.gameLost === false
    ) {
      return this._getVRNavigator();
    }
    if (this.props.gameWon === true) {
      return <GameWonScreen />;
    }
    if (this.props.gameLost === true) {
      return <GameLostScreen />;
    }
    if (
      this.props.navigation == "unset" &&
      this.props.gameWon === false &&
      this.props.gameLost === false &&
      this.props
    ) {
      return (
        <Provider store={store}>
          <View style={localStyles.outer}>
            <View style={localStyles.inner}>
              <Text
                style={{
                  fontFamily: "Futura-CondensedExtraBold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 50
                }}
              >
                Instructions:
              </Text>
              <View style={{ width: 300 }}>
                <Text style={localStyles.titleText}>
                  Look around in space for Grace's items. When you see one,
                  click on it to return it to her bag. Try to collect all ten
                  before time runs out!
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "orange",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20
                  }}
                >
                  Don't forget to look up, down, left, right, and behind you!
                </Text>
              </View>
              <TouchableHighlight
                style={localStyles.buttons}
                onPress={() => this.props.changeToSpace()}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}>START</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={localStyles.buttons}
                onPress={() => this.props.changeToSignUp()}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}> SignUp </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Provider>
      );
    }
  }

  _getVRNavigator = () => {
    return (
      <View>
        <ViroVRSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialVRScene }}
          vrModeEnabled={false}
        />
        {this.props.showItems ? <FooterScreen /> : <FooterLoading />}
      </View>
    );
  };
}

const localStyles = StyleSheet.create({
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
  }
});

const mapStateToProps = state => {
  return {
    score: state.score,
    gameLost: state.gameLost,
    gameWon: state.gameWon,
    navigation: state.navigation,
    showItems: state.showItems
  };
};

const mapDispatchToProps = dispatch => ({
  changeToSpace: () => dispatch(changeToSpace()),
  changeToUnset: () => dispatch(changeToUnset())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
