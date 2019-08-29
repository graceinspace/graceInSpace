import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView
} from "react-native";
import * as firebase from "firebase";
import store from "./store/index";
import { Provider, connect } from "react-redux";
import {
  changeToUnset,
  changeToProfile,
  loggedInTrue
} from "./store/thunks";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async logInUser(email, password) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => console.log("user signed in!"))
        .catch(err => console.log("not signed in", err));
      if (await firebase.auth().currentUser) {
        return this.setState({
          email: "",
          password: ""
        });
      }
    } catch (err) {
      console.log("something wrong component signinIn", err);
    }
  }

  render() {
    let user = firebase.auth().currentUser;
    return (
      <Provider store={store}>
        <KeyboardAvoidingView
          style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}
        >
          {!user ? (
            <View>
              <View style={{ marginTop: 165, alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Futura-CondensedExtraBold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 50
                  }}
                >
                  Sign In
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
                  placeholder="email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCapitalize="none"
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
                  placeholder="password"
                  returnKeyType="go"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={this.state.password}
                  style={styles.input}
                />
                <TouchableHighlight
                  style={styles.buttons}
                  onPress={() => (
                    this.logInUser(this.state.email, this.state.password),
                    this.props.loggedInTrue()
                  )}
                >
                  <Text style={styles.buttonText}>Sign in</Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : (
            <View>
              <View style={{ marginTop: 165, alignItems: "center" }}>
                <TouchableHighlight
                  style={styles.buttons}
                  onPress={() => this.props.changeToProfile()}
                >
                  <Text style={styles.buttonText}>Your Profile</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={styles.buttonGreen}
                  onPress={() => this.props.changeToUnset()}
                >
                  <Text style={styles.buttonText}>back</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
  },
  buttonGreen: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "green",
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

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToProfile: () => dispatch(changeToProfile()),
  loggedInTrue: () => dispatch(loggedInTrue())
});

module.exports = connect(
  null,
  mapDispatchToProps
)(SignIn);
