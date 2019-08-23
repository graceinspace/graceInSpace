import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import { Provider } from "react-redux";
import store from "./store/index";

class GameLostScreen extends Component {
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
        <Text
                  style={{
                    fontFamily: "Futura-CondensedExtraBold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 50
                  }}
                >
                  Game over
                </Text>
                <Image style={{ width: 300, height: 240 }}
              source={{uri: 'https://i.imgur.com/piIoTYo.png'}}/>
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Ouch! You ran out of time!
          </Text>
          {/* <Button
            style={localStyles.button}
            title="Try again!"
            onPress={() => {
              this.changeState();
            }}
          /> */}
          <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={() => {
                      this.changeState();
                    }}
                    underlayColor={"#68a0ff"}
                  >
                    <Text style={localStyles.buttonText}>Try Again!</Text>
          </TouchableHighlight>
        </View>
      );
    } else if (this.state.startAgain === true) {
      return (
        <Provider store={store}>
          <WelcomeScreen />
        </Provider>
      );
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
  }
});

module.exports = GameLostScreen;
