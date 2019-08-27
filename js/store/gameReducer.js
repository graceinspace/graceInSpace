import {
  GAME_LOST,
  SCORE,
  GAME_WON,
  UNSET,
  SPACE,
  GET_OBJECTS,
  SHOW_ITEMS,
  SECONDS,
  SIGNUP,
  SIGNIN,
  PROFILE,
  USERS_SCORES
} from "./gameActions";
import allObjects from "../objects";

let initialState = {
  score: 0,
  gameLost: false,
  gameWon: false,
  navigation: "unset",
  objects: allObjects,
  showItems: false,
  seconds: 0,
  userTimes: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOST:
      return {
        ...state,
        gameLost: true,
        score: 0,
        showItems: false
      };
    case SCORE:
      return { ...state, score: state.score + 1 };
    case GAME_WON:
      return {
        ...state,
        gameWon: true,
        score: 0,
        showItems: false
      };
    case UNSET:
      return {
        ...state,
        navigation: "unset",
        gameWon: false,
        gameLost: false,
        score: 0,
        showItems: false,
        seconds: 0
      };
    case SPACE:
      return {
        ...state,
        navigation: "space",
        gameWon: false,
        gameLost: false,
        score: 0,
        showItems: false,
        seconds: 0
      };
    case SIGNUP:
      return {
        ...state,
        navigation: "signup",
        gameWon: false,
        gameLost: false,
        score: 0,
        showItems: false,
        seconds: 0
      };
    case SIGNIN:
      return {
        ...state,
        navigation: "signin",
        gameWon: false,
        gameLost: false,
        score: 0,
        showItems: false,
        seconds: 0
      };
    case PROFILE:
      return {
        ...state,
        navigation: "profile",
        gameWon: false,
        gameLost: false,
        score: 0,
        showItems: false,
        seconds: 0
      };
    case GET_OBJECTS:
      return { ...state, objects: action.obj };
    case SHOW_ITEMS:
      return { ...state, showItems: true };
    case SECONDS:
      return { ...state, seconds: state.seconds + 1 };
    case USERS_SCORES:
      return { ...state, userTimes: action.scores };
    default:
      return state;
  }
}
