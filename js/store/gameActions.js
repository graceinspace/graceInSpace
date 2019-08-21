export const SCORE = "SCORE";
export const GAME_OVER = "GAME_OVER";

//action creator

export const updateScore = () => {
  return {
    type: SCORE
  };
};

export const gameRunning = () => {
  return {
    type: GAME_OVER
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
