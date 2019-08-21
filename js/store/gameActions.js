export const SCORE = "SCORE";
export const GAME_LOST = "GAME_LOST";
export const GAME_WON = "GAME_WON";

//action creator

export const updateScore = () => {
  return {
    type: SCORE
  };
};

export const gameLost = () => {
  return {
    type: GAME_LOST
  };
};

export const gameWon = () => {
  return {
    type: GAME_WON
  };
};

//thunk
export function upCount() {
  return async dispatch => {
    try {
      dispatch(updateScore());
    } catch (error) {
      next("error in upCount thunk >>", error);
    }
  };
}

export function winGame() {
  return async dispatch => {
    try {
      dispatch(gameWon());
    } catch (error) {
      next("error in winGame thunk >>", error);
    }
  };
}

export function loseGame() {
  return async dispatch => {
    try {
      dispatch(gameLost());
    } catch (error) {
      next("error in loseGame thunk >>", error);
    }
  };
}
