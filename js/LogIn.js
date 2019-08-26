import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import * as firebase from "firebase";
import { FirebaseWrapper } from "../firebase/firebase";
import WelcomeScreen from "./WelcomeScreen";
import store from "./store/index";
import { Provider } from "react-redux";
const defaultNavigator = "defaultNavigator";
const start = "start";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nextPage: defaultNavigator
    };
  }

  logInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log("not signed in", err));
  };

  render() {
    if (this.state.nextPage == defaultNavigator) {
      return this._showPage();
    } else if (this.state.nextPage == start) {
      return this._navigateToStart();
    }
  }
  _showPage() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
        <View style={{ marginTop: 165, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Futura-CondensedExtraBold",
              color: "white",
              textAlign: "center",
              fontSize: 50
            }}
          >
            Log In
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 25
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input}
            multiline={false}
            numberOfLines={1}
            onChangeText={email => this.setState({ email })}
            placeholder="Your email"
            value={this.state.email}
            style={styles.input}
          />
          <Text
            style={{
              color: "white",
              textAlign: "center"
            }}
          >
            Password
          </Text>
          <TextInput
            style={styles.input}
            multiline={false}
            numberOfLines={1}
            onChangeText={password => this.setState({ password })}
            placeholder="Your password"
            value={this.state.password}
            style={styles.input}
          />
          <TouchableHighlight
            style={styles.buttons}
            onPress={
              (this.logInUser(this.state.email, this.state.password),
              this._changeNavigationDirection(start))
            }
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _navigateToStart() {
    return (
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    );
  }

  _changeNavigationDirection(nextPage) {
    return () => {
      this.setState({
        nextPage: nextPage
      });
    };
  }
}

const styles = StyleSheet.create({
  close: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10
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
  },
  input: {
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    width: 150,
    borderColor: "white",
    borderWidth: 1,
    color: "white"
  }
});
