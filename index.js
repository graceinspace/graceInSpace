import { AppRegistry } from "react-native";
import GraceInSpace from "./App.js";
import { store } from "./js/store";
import React, { Component } from "react";
import { Provider } from "react-redux";

AppRegistry.registerComponent("GraceInSpace", () => GraceInSpace);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("GraceInSpace", () => GraceInSpace);
