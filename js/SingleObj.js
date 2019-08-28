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
    return num % 2 === 0
      ? "moveRightLeft" + this.props.level
      : "moveLeftRight" + this.props.level;
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
            loop: true
          }}
        />
      </Provider>
    );
  }
}

ViroAnimations.registerAnimations({
  moveRighteasy: {
    properties: {
      positionX: "+=1",
      rotateZ: "+=150",
      rotateX: "+=150",
      rotateY: "+=150"
    },
    duration: 5000
  },
  moveLefteasy: {
    properties: {
      positionX: "-=1",
      rotateZ: "-=150",
      rotateX: "-=150",
      rotateY: "-=150"
    },
    duration: 5000
  },
  moveRightLefteasy: [["moveRighteasy", "moveLefteasy"]],
  moveLeftRighteasy: [["moveLefteasy", "moveRighteasy"]],
  moveRightmedium: {
    properties: {
      positionX: "+=10",
      rotateZ: "+=150",
      rotateX: "+=150",
      rotateY: "+=150"
    },
    duration: 5000
  },
  moveLeftmedium: {
    properties: {
      positionX: "-=10",
      rotateZ: "-=150",
      rotateX: "-=150",
      rotateY: "-=150"
    },
    duration: 5000
  },
  moveRightLeftmedium: [["moveRightmedium", "moveLeftmedium"]],
  moveLeftRightmedium: [["moveLeftmedium", "moveRightmedium"]],
  moveRighthard: {
    properties: {
      positionX: "+=30",
      rotateZ: "+=150",
      rotateX: "+=150",
      rotateY: "+=150"
    },
    duration: 5000
  },
  moveLefthard: {
    properties: {
      positionX: "-=30",
      rotateZ: "-=150",
      rotateX: "-=150",
      rotateY: "-=150"
    },
    duration: 5000
  },
  moveRightLefthard: [["moveRighthard", "moveLefthard"]],
  moveLeftRighthard: [["moveLefthard", "moveRighthard"]]
});

const mapStateToProps = state => ({
  score: state.score,
  showItems: state.showItems,
  level: state.level
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
