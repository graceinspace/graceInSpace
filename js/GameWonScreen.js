import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import {
  changeToUnset,
  changeToSpace,
  changeToSignUp
} from "./store/gameActions";
import { connect } from "react-redux";
import { FirebaseWrapper } from "../firebase/firebase";
export default class GameWonScreen extends Component {
  constructor() {
    super();
  }
  async postScore(seconds) {
    try {
      console.log("posting");
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument("scores", {
        seconds: seconds
      });
    } catch (err) {
      console.log("something wrong component post", err);
    }
  }

  render() {
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
          Congratulations!
        </Text>
        <Image
          style={{ width: 300, height: 240 }}
          source={{ uri: "https://i.imgur.com/DGj1yGn.png" }}
        />
        <View style={{ width: 300 }}>
          <Text
            style={{
              color: "white",
              textAlign: "justify",
              paddingBottom: 20,
              fontSize: 20
            }}
          >
            You helped Grace collect all of her items in {this.props.seconds}
            seconds! Now she can go on vacation!
          </Text>
        </View>
        <TouchableHighlight
          style={localStyles.buttons}
          onPress={() => (
            this.postScore(this.props.seconds), this.props.changeToUnset()
          )}
          underlayColor={"#68a0ff"}
        >
          <Text style={localStyles.buttonText}>Play Again!</Text>
        </TouchableHighlight>
      </View>
    );
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
  }
});

const mapStateToProps = state => ({
  seconds: state.seconds
});

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToSpace: () => dispatch(changeToSpace()),
  changeToSignUp: () => dispatch(changeToUnset())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameWonScreen);
