import { GAME_LOST, SCORE, GAME_WON, UNSET, SPACE, GET_OBJECTS, SHOW_ITEMS } from "./gameActions";
import allObjects from '../objects'

let initialState = {
  score: 0,
  gameLost: false,
  gameWon: false,
  navigation: "unset",
  objects: allObjects,
  showItems: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOST:
      return { ...state, gameLost: true, score: 0, showItems: false };
    case SCORE:
      return { ...state, score: state.score + 1 };
    case GAME_WON:
      return { ...state, gameWon: true, score: 0, showItems: false };
    case UNSET:
      return {...state, navigation: "unset", gameWon: false, gameLost: false, score: 0, showItems: false}
    case SPACE:
      return {...state, navigation: "space", gameWon: false, gameLost: false, score: 0, showItems: false}
    case GET_OBJECTS:
      return {...state, objects: action.obj}
    case SHOW_ITEMS:
      return {...state, showItems: true}
    default:
      return state;
  }
}
