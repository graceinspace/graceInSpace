import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
// import CountDown from "react-native-countdown-component";
import { Footer, FooterTab } from "native-base";


export default class FooterLoading extends Component {
  render() {
    return(
      <View>
      <Footer style={style.bottomView}>
        <FooterTab style={style.bottomView}>
          <Text style={style.titleText}>Loading...</Text>
        </FooterTab>
      </Footer>
    </View>
    )
  }
}

const style = StyleSheet.create({
  bottomView: {
    backgroundColor: "black",
    borderTopColor: "black",
    display: "flex",
    alignItems: "flex-end"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "white",
    textAlign: "center",
    fontSize: 25
  }
})
module.exports = FooterLoading
