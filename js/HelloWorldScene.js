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
  ViroSpotLight,
  ViroSpinner
} from "react-viro";
import SingleObj from "./SingleObj";
import allObjects from "./objects";

export default class HelloWorldScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: allObjects,
      // showSceneItems:false
      // counter: 0
    };
    // this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this)
  }

//   _onBackgroundPhotoLoadEnd(){
//     this.setState({
//         showSceneItems:true
//     });
// }

  render() {
    console.log("THIS IS THE OBJECT", allObjects);
    return (
      <ViroScene>
          <ViroSpinner visible={!this.props.sceneNavigator.viroAppProps.showSceneItems} position={[0, 0, -5]}/>
          {this.state.arr.map((obj, i) => {
            return (
              <SingleObj
                key={i}
                obj={obj}
                showSceneItems={this.props.sceneNavigator.viroAppProps.showSceneItems}
                // updateScore={this.props.sceneNavigator.viroAppProps.updateScore}
              />
            );
          })}

          <ViroAmbientLight color="#FFFFFF" />

        <Viro360Image source={require("./res/360_space.jpg")}  onLoadEnd={this.props.sceneNavigator.viroAppProps.loadEnd} />
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
