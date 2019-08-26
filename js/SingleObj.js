import React, { Component } from "react";
import { Viro3DObject, ViroAnimations } from "react-viro";
import { connect } from "react-redux";
import { upCount } from "./store/gameActions";
import store from "./store/index";
import { Provider } from "react-redux";

class SingleObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contains: true
    };
  }

  rando = () => {
    return Math.floor(Math.random() * (10 - -10) + -10);
  };
  a = this.rando();
  b = this.rando();
  c = this.rando();

  getAnimation() {
    let num = this.rando();
    return num % 2 === 0 ? "moveRight" : "moveLeft";
  }

  render() {
    return (
      <Provider store={store}>
        <Viro3DObject
          visible={this.state.contains && this.props.showItems}
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
          animation={{
            name: this.getAnimation(),
            run: true,
            loop: true,
            easing: "EaseIn"
          }}
        />
      </Provider>
    );
  }
}

ViroAnimations.registerAnimations({
  moveRight: { properties: { positionX: "+=5" }, duration: 3000 },
  moveLeft: { properties: { positionX: "-=5" }, duration: 3000 }
});

const mapStateToProps = state => ({
  score: state.score,
  showItems: state.showItems
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
