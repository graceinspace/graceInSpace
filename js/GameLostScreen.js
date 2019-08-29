import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import { changeToUnset, changeToSpace } from "./store/gameActions";
import { connect } from "react-redux";

class GameLostScreen extends Component {
  constructor() {
    super();
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
          Game over
        </Text>
        <Image
          style={{ width: 300, height: 240 }}
          source={{ uri: "https://i.imgur.com/piIoTYo.png" }}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingBottom: 20,
            fontSize: 20
          }}
        >
          Ouch! You ran out of time!
        </Text>
        <TouchableHighlight
          style={localStyles.buttons}
          onPress={() => {
            this.props.changeToUnset();
          }}
          underlayColor={"#68a0ff"}
        >
          <Text style={localStyles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
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
  score: state.score
});

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToSpace: () => dispatch(changeToSpace())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLostScreen);
