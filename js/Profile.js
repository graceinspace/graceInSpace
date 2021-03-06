import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from "react-native";
import * as firebase from "firebase";
import store from "./store/index";
import {
  changeToUnset,
  changeToSpace,
  getScores,
  loggedInFalse
} from "./store/thunks";
import { FirebaseWrapper } from "../firebase/firebase";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      times: [{ seconds: 0 }]
    };
  }
  async componentDidMount() {
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    let seconds = await FirebaseWrapper.GetInstance().SetUpCollectionListener(
      userId
    );
    console.log(seconds);
    this.setState({
      times: seconds
    });
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
          <View style={{ marginTop: 70,  marginBottom: 40, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Futura-CondensedExtraBold",
                color: "white",
                textAlign: "center",
                fontSize: 50
              }}
            >
              Your Profile
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 25,
                fontSize: 20,
                marginBottom: 25
              }}
            >
              Scroll to see your recent times:
            </Text>
            <ScrollView>
              {this.state.times ? (
                <View>
                  {this.state.times.map((time, i) => {
                    return (
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          marginTop: 25,
                          fontSize: 20,
                          marginBottom: 25
                        }}
                        key={i}
                      >
                        {time.seconds} seconds
                      </Text>
                    );
                  })}
                </View>
              ) : (
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 25,
                    fontSize: 20,
                    marginBottom: 25
                  }}
                >
                  No scores yet
                </Text>
              )}
            </ScrollView>

            <TouchableHighlight
              style={styles.buttons}
              onPress={() => (
                this.signOutUser(),
                this.props.loggedInFalse(),
                this.props.changeToUnset()
              )}
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
            <TouchableHighlight
              style={styles.buttons}
              onPress={() => this.props.changeToUnset()}
              underlayColor={"#68a0ff"}
            >
              <Text style={styles.buttonText}>Back</Text>
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
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    userTimes: state.userTimes
  };
};

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToSpace: () => dispatch(changeToSpace()),
  getScores: scores => dispatch(getScores(scores)),
  loggedInFalse: () => dispatch(loggedInFalse())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
