import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroScene,
  Viro3DObject,
  Viro360Image,
  ViroAmbientLight
} from "react-viro";
import SingleObj from "./SingleObj";
import allObjects from "./objects";

export default class HelloWorldScene extends Component {
  constructor() {
    super();

    this.state = {
      arr: allObjects,
      counter: 0
    };
  }
  _incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  _decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  _resetCounter = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    console.log("THIS IS THE OBJECT", allObjects);
    return (
      <ViroScene>
        <React.Fragment>
          <ViroText
            text={"Counter:" + this.state.counter.toString()}
            scale={[0.5, 0.5, 0.5]}
            height={1}
            width={4}
            position={[1, 0.3, -1]}
            style={styles.counterTextStyle}
          />
          <ViroText
            text="-"
            fontSize={20}
            height={2}
            width={4}
            position={[1.9, -0.6, -1]}
            onClick={this._decrementCounter}
          />
          <ViroText
            text="+"
            fontSize={20}
            height={2}
            width={4}
            position={[2.3, -0.6, -1]}
            onClick={this._incrementCounter}
          />
          {/* mapping through all our objects!!! */}
          {this.state.arr.map((obj, i) => {
            return (
              <SingleObj
                key={i}
                obj={obj}
                updateScore={this.props.updateScore}
              />
            );
          })}

          <ViroAmbientLight color="#FFFFFF" />
          <ViroText
            text="RESET"
            scale={[0.5, 0.5, 0.5]}
            height={1}
            width={4}
            position={[1, -0.3, -1]}
            style={styles.counterTextStyle}
            onClick={this._resetCounter}
          />
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
