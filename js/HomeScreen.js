import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ViroARScene, ViroText, ViroConstants, ViroScene, Viro3DObject, Viro360Image, ViroAmbientLight, ViroImage, ViroFlexView, ViroAnimatedImage, ViroButton } from 'react-viro';
export default class HomeScreen extends Component {
  constructor() {
  super();
  }
  // // Set initial state here
  // this.state = {
  //   counter: 0,
  // };
  // // bind 'this' to functions
  // this._incrementCounter = this._incrementCounter.bind(this);
  // this._decrementCounter = this._decrementCounter.bind(this);
  // this._resetCounter = this._resetCounter.bind(this);
  // }
  // _incrementCounter() {
  //   this.setState({
  //   counter: this.state.counter + 1,
  // });
  // }
  // _decrementCounter() {
  //   this.setState({
  //   counter: this.state.counter - 1,
  // });
  // }
  // _resetCounter() {
  //   this.setState({
  //   counter: 0,
  // });
  // }
  render() {

    return (
      <ViroScene>
      <React.Fragment>
      <ViroFlexView style={{flexDirection: 'column', padding: .1}}
              width={5.0} height={10.0}
              position={[-5.0, 0.0, -2.0]}
              rotation={[-5, 45, -10]} >
          <ViroImage
            style={{flex: .5}}
            width={5}
            height={2}
            source={require('./res/grace-logo-01.png')}
          />
          <ViroText
            style={{flex: 1}}
            text="Oh no Grace the alien lost all her belongings! Can you help her find them??"
            height={3}
            width={5}
            style={styles.counterTextStyle}
          />
          <ViroAnimatedImage
            style={{flex: 1}}
            width={5}
            height={5}
            loop={true}
            paused={false}
            source={{
              uri:
                "https://media.giphy.com/media/YSGKKfjAj6It2BZ6AS/giphy.gif"
            }}
          />
      </ViroFlexView>
      <ViroButton
            source={require("./res/buttons-01.png")}
            tapSource={require("./res/buttons-02.png")}
            position={[-10.0, 0.0, -5]}
            rotation={[45, 45, 0]}
            height={2}
            width={3}
            // onTap={this._onButtonTap}
            />
      </React.Fragment>
      <Viro360Image source={require('./res/360_space.jpg')} />
      </ViroScene>
      );
    }

  }
  var styles = StyleSheet.create({
  homeTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
module.exports = HomeScreen;
