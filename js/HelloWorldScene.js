// 'use strict';

// import React, { Component } from 'react';

// import {StyleSheet} from 'react-native';
// import CountDownClock from './CountDownClock'

// import {
//   ViroScene,
//   ViroText,
//   Viro360Image,
// } from 'react-viro';

// export default class HelloWorldScene extends Component {

//   constructor() {
//     super();

//     this.state = {} // Set initial state here
//   }

//   render() {
//     return (
//       <ViroScene>
//         <Viro360Image source={require('./res/guadalupe_360.jpg')} />
//         <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
//         <CountDownClock/>
//       </ViroScene>
//     );
//   }

// }

// var styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     fontFamily: 'Arial',
//     fontSize: 60,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });

// module.exports = HelloWorldScene;

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ViroARScene, ViroText, ViroConstants, ViroScene, Viro3DObject, Viro360Image, ViroAmbientLight } from 'react-viro';
export default class HelloWorldScene extends Component {
  constructor() {
  super();
  // Set initial state here
  this.state = {
    counter: 0,
  };
  // bind 'this' to functions
  this._incrementCounter = this._incrementCounter.bind(this);
  this._decrementCounter = this._decrementCounter.bind(this);
  this._resetCounter = this._resetCounter.bind(this);
  }
  _incrementCounter() {
    this.setState({
    counter: this.state.counter + 1,
  });
  }
  _decrementCounter() {
    this.setState({
    counter: this.state.counter - 1,
  });
  }
  _resetCounter() {
    this.setState({
    counter: 0,
  });
  }
  render() {
    console.log(this.state)
    return (
      <ViroScene>
      <React.Fragment>
      <ViroText
      text={'Counter:' + this.state.counter.toString()}
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
      <Viro3DObject source={require('./res/dog2.obj')}
              position={[15, 5.6, -15]}
              scale={[0.03, 0.03, 0.03]}
              resources={[require('./res/dog2.mtl')]}
              type="OBJ"
              onClick={this._incrementCounter}
              />

      <Viro3DObject source={require('./res/duckie.obj')}
              position={[-1, -15.6, -15]}
              scale={[0.01, 0.01, 0.01]}
              resources={[require('./res/duckie.mtl')]}
              type="OBJ"
              onClick={this._incrementCounter}
              />

      <Viro3DObject source={require('./res/sax.obj')}
              position={[1, 4.6, -7]}
              scale={[0.01, 0.01, 0.01]}
              resources={[require('./res/sax.mtl')]}
              type="OBJ"
              onClick={this._incrementCounter}
              />
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
      <Viro360Image source={require('./res/360_space.jpg')} />
      </ViroScene>
      );
    }

  }
  var styles = StyleSheet.create({
    counterTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
module.exports = HelloWorldScene;
