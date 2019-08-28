
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import * as firebase from "firebase";
import store from "./store/index";
import { changeToUnset, changeToSpace, getScores, loggedInFalse } from "./store/gameActions";

export default class Profile extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    await FirebaseWrapper.GetInstance.SetUpCollectionListener(
      "scores",
      userId,
      scores => {
        dispatch(getScores(scores));
      }
    );
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!'))
      .catch(err => console.log('you did not sign out >>', err));
  };

  render() {
    return (
      <Provider store={store}>
        <View
          style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}
        >
          <View style={{ marginTop: 165, alignItems: "center" }}>
            <Text style={styles.text}>Welcome to your page</Text>
            <Text style={styles.text}>Your best times: </Text>
            {this.props.userTimes.map((time, i) => {
              return <Text key={i}>{time}</Text>;
            })}
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
              underlayColor={'#68a0ff'}
            >
              <Text style={styles.buttonText}>Play</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() => this.props.changeToUnset()}
              underlayColor={'#68a0ff'}
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
    backgroundColor: '#4AC7CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    height: 60,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#4AC7CB',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    userTimes: state.userTimes
  };
};

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToSpace: () => dispatch(changeToSpace()),
  loggedInFalse: () => dispatch(loggedInFalse()),
  getScores: scores => dispatch(getScores(scores)),
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
