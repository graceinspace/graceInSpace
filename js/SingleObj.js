import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Viro3DObject } from "react-viro";

export default class SingleObj extends Component {
  constructor(props) {
    super(props);
    // Set initial state here
  }

  rando = () => {
    return Math.floor(Math.random() * (10 - -10) + -10);
  };
  render() {
    console.log("this is our PROPS");
    let source = this.props.obj.source;
    let resources = this.props.obj.resources;
    return (
      <Viro3DObject
        source={this.props.obj.source} //obj.source
        position={[this.rando(), this.rando(), this.rando()]} //random function
        scale={[0.01, 0.01, 0.01]}
        resources={this.props.obj.resources} //obj.resource
        type="OBJ"
      />
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
module.exports = SingleObj;
