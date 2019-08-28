import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import * as firebase from 'firebase';

import store from './store/index';
import { Provider, connect } from 'react-redux';
import { changeToUnset, changeToProfile } from './store/gameActions';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // nextPage: defaultNavigator
    };
  }
  createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log('not created', err));
  };
  logInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log('not signed in', err));
  };

  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView
          style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}
        >
          <View>
            <View style={{ marginTop: 165, alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'Futura-CondensedExtraBold',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 50,
                }}
              >
                Sign Up
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 25,
                }}
              >
                Email
              </Text>
              <TextInput
                style={styles.input}
                multiline={false}
                numberOfLines={1}
                onChangeText={email => this.setState({ email })}
                placeholder="email"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                value={this.state.email}
                style={styles.input}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Password
              </Text>
              <TextInput
                style={styles.input}
                multiline={false}
                numberOfLines={1}
                onChangeText={password => this.setState({ password })}
                placeholder="password"
                autoCapitalize="none"
                returnKeyType="go"
                secureTextEntry={true}
                value={this.state.password}
                style={styles.input}
              />
              <TouchableHighlight
                style={styles.buttons}
                onPress={() => (
                  this.createUser(this.state.email, this.state.password),
                  this.logInUser(this.state.email, this.state.password),
                  this.props.changeToProfile()
                )}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttons}
                onPress={() => this.props.changeToUnset()}
              >
                <Text style={styles.buttonText}>back</Text>
              </TouchableHighlight>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  buttons: {
    height: 60,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#4AC7CB',
    borderRadius: 10,
  },
  input: {
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    width: 150,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
});

const mapDispatchToProps = dispatch => ({
  changeToUnset: () => dispatch(changeToUnset()),
  changeToProfile: () => dispatch(changeToProfile()),
});

module.exports = connect(
  null,
  mapDispatchToProps
)(SignUp);
