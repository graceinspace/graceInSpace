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
  a = this.rando();
  b = this.rando();
  c = this.rando();

  render() {
    return (
      <Provider store={store}>
        <Viro3DObject
          hidden = {!this.props.showSceneItems}
          visible={this.state.contains && this.props.showSceneItems}
          source={this.props.obj.source} //obj.source
          position={[this.a, this.b, this.c]} //random function
          scale={[0.02, 0.02, 0.02]}
          resources={this.props.obj.resources} //obj.resource
          type="OBJ"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          onClick={() => {
            this.setState({ contains: false });
            this.props.scoreUp();
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
