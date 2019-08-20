import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import CountDown from "react-native-countdown-component";
import { Footer, FooterTab } from "native-base";

export default class FooterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Footer style={localStyles.bottomView}>
          <FooterTab style={localStyles.bottomView}>
            <Text style={localStyles.titleText}>Score: {this.props.score}</Text>
          </FooterTab>
          <FooterTab style={localStyles.bottomView}>
            <Text style={localStyles.titleText}>Time:</Text>
            <CountDown
              until={30}
              onFinish={() => this.props.gameOverState()}
              size={15}
              digitStyle={{
                backgroundColor: "black",
                borderWidth: 2,
                borderColor: "#1CC625"
              }}
              digitTxtStyle={{ color: "white" }}
              timeToShow={["S"]}
            />
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "white",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  bottomView: {
    backgroundColor: "black",
    borderTopColor: "black",
    display: "flex",
    alignItems: "flex-end"
  }
});

module.exports = FooterScreen;
