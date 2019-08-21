import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button
} from "react-native";
var WelcomeScreen = require("./WelcomeScreen");

class GameWonScreen extends Component {
  constructor() {
    super();
    this.state = {
      startAgain: false
    };
  }

  changeState = () => {
    this.setState({ startAgain: true });
  };
  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.startAgain === false) {
      return (
        <View style={localStyles.container}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Congratulations! You helped Grace collect all of her items before
            time ran out! Now she can go on vacation!
          </Text>
          <Button
            style={localStyles.button}
            title="Try again!"
            onPress={() => {
              this.changeState();
            }}
          />
        </View>
      );
    } else if (this.state.startAgain === true) {
      return <WelcomeScreen />;
    }
  }
}

var localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
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

module.exports = GameWonScreen;
