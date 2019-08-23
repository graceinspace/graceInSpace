import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image
} from "react-native";
// var WelcomeScreen = require("./WelcomeScreen");
import { changeToUnset, changeToSpace } from "./store/gameActions";
import {connect} from "react-redux"


export default class GameWonScreen extends Component {
  constructor() {
    super();
  //   this.state = {
  //     startAgain: false
  //   };
  }

  // changeState = () => {
  //   this.setState({ startAgain: true });
  // };
  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    // if (this.state.startAgain === false) {
      return (
        <View style={localStyles.container}>
          <Text
              style={{
              fontFamily: "Futura-CondensedExtraBold",
              color: "white",
              textAlign: "center",
              fontSize: 50
              }}>
                  Congratulations!
                </Text>
                <Image style={{ width: 300, height: 240 }}
              source={{uri: 'https://i.imgur.com/DGj1yGn.png'}}/>
          <View style={{ width: 300 }}>
            <Text style={{ color: "white", textAlign: "justify", paddingBottom: 20, fontSize: 20 }}>
              You helped Grace collect all of her items before
              time ran out! Now she can go on vacation!
            </Text>
          </View>

          <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={() => {
                     this.props.changeToSpace();
                     }}
                    underlayColor={"#68a0ff"}>
           <Text style={localStyles.buttonText}>Try Again!</Text>
          </TouchableHighlight>
          <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={() => {
                     this.props.changeToUnset();
                     }}
                    underlayColor={"#68a0ff"}>
           <Text style={localStyles.buttonText}>Back to Home!</Text>
          </TouchableHighlight>
        </View>
      );
    // } else if (this.state.startAgain === true) {
    //   return <WelcomeScreen />;
    // }
  }
}

var localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    // marginTop: 5,
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 50,
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
  }})



  const mapDispatchToProps = dispatch => ({
    changeToUnset: () => dispatch(changeToUnset()),
    changeToSpace: () => dispatch(changeToSpace())
  })

  module.exports = connect(
    null,
    mapDispatchToProps
  )(GameWonScreen)
