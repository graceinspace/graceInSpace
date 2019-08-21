import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Viro3DObject } from "react-viro";
import { connect } from "react-redux";
import { upCount } from "./store/gameActions";
import store from "./store/index";
import { Provider } from "react-redux";
class SingleObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [],
      contains: true
    };
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
      //   onP
      <Provider store={store}>
        <Viro3DObject
          visible={this.state.contains}
          source={this.props.obj.source} //obj.source
          position={[this.rando(), this.rando(), this.rando()]} //random function
          scale={[0.02, 0.02, 0.02]}
          resources={this.props.obj.resources} //obj.resource
          type="OBJ"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          onClick={() => {
            this.setState({ contains: false });
            // this.props.updateScore();
            scoreUp();
          }}
        />
      </Provider>
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

const mapStateToProps = state => ({
  score: state.score
});

const mapDispatch = dispatch => {
  return {
    scoreUp: () => dispatch(upCount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(SingleObj);
//module.exports = SingleObj;
