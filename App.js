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

const sharedProps = {
  apiKey: secretKey
};
console.disableYellowBox = true;
const UNSET = "UNSET";
const instructions = "instructions";
const defaultNavigator = UNSET;

export default class GraceInSpace extends Component {
  constructor() {
    super();

    this.state = {
      nextPage: defaultNavigator,
      sharedProps: sharedProps,
      loaded: false
    };
    this.showPage = this.showPage.bind(this);
    this.navigateToNext = this.navigateToNext.bind(this);
    this.changeNavigationDirection = this.changeNavigationDirection.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    if (this.state.nextPage == UNSET) {
      return this.showPage();
    } else if (this.state.nextPage == instructions) {
      return this.navigateToNext();
    }
  }

  showPage() {
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
                />
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
            {this.state.loaded ? (
              <TouchableHighlight
                style={localStyles.buttons}
                onPress={this.changeNavigationDirection(instructions)}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}>START</Text>
              </TouchableHighlight>
            ) : null}
          </View>
        </View>
      </Provider>
    );
  }

  navigateToNext() {
    return (
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    );
  }

  changeNavigationDirection(nextPage) {
    return () => {
      this.setState({
        nextPage: nextPage
      });
    };
  }
}

const localStyles = StyleSheet.create({
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
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
  }
});

module.exports = GraceInSpace;
