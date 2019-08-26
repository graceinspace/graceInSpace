import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import store from "./js/store/index";
import { Provider } from "react-redux";
import { FirebaseWrapper } from "./firebase/firebase";
import { firebaseConfig } from "./firebaseConfig";
import WelcomeScreen from "./js/WelcomeScreen";
import { secretKey } from "./secrets";
import SignUp from "./js/SignUp";
import LogIn from "./js/LogIn"

const sharedProps = {
  apiKey: secretKey
};

const UNSET = "UNSET";
const instructions = "instructions";
const signup = "signup";
const signin = "signin"

const defaultNavigator = UNSET;

export default class GraceInSpace extends Component {
  constructor() {
    super();

    this.state = {
      nextPage: defaultNavigator,
      sharedProps: sharedProps,
      loaded: false
    };
    this._showPage = this._showPage.bind(this);
    this._navigateToNext = this._navigateToNext.bind(this);
    this._changeNavigationDirection = this._changeNavigationDirection.bind(
      this
    );
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    if (this.state.nextPage == UNSET) {
      return this._showPage();
    } else if (this.state.nextPage == instructions) {
      return this._navigateToNext();
    } else if (this.state.nextPage == signup) {
      return this._navigateToSignUp();
    } else if (this.state.nextPage == signin) {
      return this._navigateToLogin();
    }
  }

  _showPage() {
    FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
    return (
      <Provider store={store}>
        <View style={localStyles.outer}>
          <View style={localStyles.inner}>
            {this.state.loaded ? (
              <View>
                <Text
                  style={{
                    fontFamily: "Futura-CondensedExtraBold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 50
                  }}
                >
                  Grace In Space
                </Text>
                <View style={{ width: 300 }}>
                  <Text style={localStyles.titleText}>
                    Grace the Alien was traveling through space for her annual
                    beach week with the girls when she dropped her bag! Can you
                    help her collect all her items before they float away?
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={this._changeNavigationDirection(signin)}
                    underlayColor={"#68a0ff"}
                  >
                    <Text style={localStyles.buttonText}>Login</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={this._changeNavigationDirection(signup)}
                    underlayColor={"#68a0ff"}
                  >
                    <Text style={localStyles.buttonText}>Sign Up</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={localStyles.buttons}
                    onPress={this._changeNavigationDirection(instructions)}
                    underlayColor={"#68a0ff"}
                  >
                    <Text style={localStyles.buttonText}>NEXT</Text>
                  </TouchableHighlight>
                </View>
              </View>
            ) : (
              <View>
                <Text style={localStyles.loadingText}>Loading...</Text>
              </View>
            )}

            <Image
              style={{ width: 300, height: 333 }}
              source={require("./js/res/grace2.gif")}
              onLoadEnd={this.imageLoaded}
            />
          </View>
        </View>
      </Provider>
    );
  }

  _navigateToNext() {
    return (
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    );
  }

  _changeNavigationDirection(nextPage) {
    return () => {
      this.setState({
        nextPage: nextPage
      });
    };
  }

  _navigateToLogin() {
    return (
      <Provider store={store}>
        <LogIn />
      </Provider>
    );
  }


  _navigateToSignUp() {
    return (
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
  }
}



const localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  image: {
    marginTop: 50
  },
  titleText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify"
  },
  loadingText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 40,
    width: 90,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
  }
});

module.exports = GraceInSpace;
