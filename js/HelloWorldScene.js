import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroScene,
  Viro3DObject,
  Viro360Image,
  ViroAmbientLight,
  ViroSpotLight
} from "react-viro";
import SingleObj from "./SingleObj";
import allObjects from "./objects";

export default class HelloWorldScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: allObjects,
      counter: 0
    };
  }

  render() {
    console.log("THIS IS THE OBJECT", allObjects);
    return (
      <ViroScene>
        <React.Fragment>

          {this.state.arr.map((obj, i) => {
            return (
              <SingleObj
                key={i}
                obj={obj}
                updateScore={this.props.sceneNavigator.viroAppProps.updateScore}
              />
            );
          })}

          <ViroAmbientLight color="#FFFFFF" />
        </React.Fragment>
        <Viro360Image source={require("./res/360_space.jpg")} />
      </ViroScene>
    );
  }
}
var styles = StyleSheet.create({
  counterTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});
module.exports = HelloWorldScene;
