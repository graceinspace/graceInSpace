import { GAME_LOST, SCORE, GAME_WON } from "./gameActions";

let initialState = {
  score: 0,
  gameLost: false,
  gameWon: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOST:
      return { ...state, gameLost: true };
    case SCORE:
      return { ...state, score: state.score + 1 };
    case GAME_WON:
      return { ...state, gameWon: true };
    default:
      return state;
  }
}
