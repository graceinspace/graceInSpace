import React, { Component } from "react";
import {
  ViroScene,
  Viro360Image,
  ViroAmbientLight,
  ViroSpinner
} from "react-viro";
import SingleObj from "./SingleObj";
import allObjects from "./objects";
import { connect } from "react-redux";
import { displayAll } from "./store/gameActions";

export default class HelloWorldScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: allObjects
    };
  }

  render() {
    console.log("THIS IS THE OBJECT", allObjects);

    return (
      <ViroScene>
        <ViroSpinner visible={!this.props.showItems} position={[0, 0, -5]} />
        {this.props.objects.map((obj, i) => {
          return <SingleObj key={i} obj={obj} />;
        })}
        <ViroAmbientLight color="#FFFFFF" />
        <Viro360Image
          source={require("./res/360_space.jpg")}
          onLoadEnd={() => this.props.displayAll()}
        />
      </ViroScene>
    );
  }
}

const mapStateToProps = state => ({
  objects: state.objects, //ADD THIS TO PROPS
  showItems: state.showItems
});

const mapDispatchToProps = dispatch => ({
  displayAll: () => dispatch(displayAll())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldScene);
