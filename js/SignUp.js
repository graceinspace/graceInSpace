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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nextPage: defaultNavigator
    };
  }
  createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log("not created", err));
  };
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginTop: 25 }}>
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={email => this.setState({ email })}
            placeholder="Your email"
            value={this.state.email}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={password => this.setState({ password })}
            placeholder="Your password"
            value={this.state.password}
            style={styles.input}
          />
          <TouchableHighlight
            onPress={
              (this.createUser(this.state.email, this.state.password),
              this.logInUser(this.state.email, this.state.password),
              this._changeNavigationDirection(start))
            }
            underlayColor={"#68a0ff"}
          >
            <Text>SingUp</Text>
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
  input: {
    height: 80
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10
  }
});

//this.createUser(this.state.email, this.state.password),
