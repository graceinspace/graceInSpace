import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import * as firebase from "firebase";
import store from "./store/index";
import { changeToUnset, changeToSpace } from "./store/gameActions";

export default class Profile extends Component {
  constructor() {
    super();
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"))
      .catch(err => console.log("you did not sign out >>", err));
  };

  render() {
    return (
      <Provider store={store}>
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}
        >
          <View style={{ marginTop: 165, alignItems: "center" }}>
            <Text style={styles.text}>Welcome to your page</Text>
            <Text style={styles.text}>Your best times: __</Text>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() => (this.signOutUser(), this.props.changeToUnset())}
              underlayColor={"#68a0ff"}
            >
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() => this.props.changeToSpace()}
              underlayColor={"#68a0ff"}
            >
              <Text style={styles.buttonText}>Play</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4AC7CB",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
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
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  }
});

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToSpace: () => dispatch(changeToSpace())
});

module.exports = connect(
  null,
  mapDispatchToProps
)(Profile);
