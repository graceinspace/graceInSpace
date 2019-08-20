import { AppRegistry } from 'react-native';
import App from './App.js';
import {store} from './js/store'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('GraceInSpace', () => Root);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('GraceInSpace', () => Root);
