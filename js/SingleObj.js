import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Viro3DObject } from "react-viro";

export default class SingleObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [],
      contains: true
    }
  }

  rando = () => {
    return Math.floor(Math.random() * (10 - -10) + -10);
  };




  render() {
    // let contains = this.state.objectArray.some(obj => JSON.stringify(obj) === JSON.stringify(this.props.obj))


    console.log("this is our PROPS");
    let source = this.props.obj.source;
    let resources = this.props.obj.resources;

    return (
    // <TouchableOpacity
    //   disabled={contains}
    //   onPress={()=> {this.state.objectArray.push(this.props.obj)}}
    // >
      <Viro3DObject
        visible={this.state.contains}
        source={this.props.obj.source} //obj.source
        position={[this.rando(), this.rando(), this.rando()]} //random function
        scale={[0.01, 0.01, 0.01]}
        resources={this.props.obj.resources} //obj.resource
        type="OBJ"
        onClick={()=> {this.setState({ contains:false })}}
      />
    //  </TouchableOpacity>
    );
  }
}
var styles = StyleSheet.create({
  counterTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  }
});
module.exports = SingleObj;
