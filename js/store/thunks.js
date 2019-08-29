import {
  updateScore,
  gameLost,
  gameWon,
  setToProfile,
  setToSignIn,
  setToSignUp,
  setToSpace,
  setToUnset,
  login,
  logout,
  showItems,
  getObjects,
  getSeconds,
  newLevel,
  usersScores
} from "./actions"

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

export function changeToUnset() {
  return async dispatch => {
    try {
      dispatch(setToUnset());
    } catch (error) {
      next(error);
    }
  };
}

export function changeToSpace() {
  return async dispatch => {
    try {
      dispatch(setToSpace());
    } catch (error) {
      next(error);
    }
  };
}

export function getAllObjects() {
  return async dispatch => {
    try {
      dispatch(getObjects(allObjects));
    } catch (error) {
      next(error);
    }
  };
}

export function displayAll() {
  return async dispatch => {
    try {
      dispatch(showItems());
    } catch (error) {
      next(error);
    }
  };
}

export function gotSeconds() {
  return async dispatch => {
    try {
      dispatch(getSeconds());
    } catch (error) {
      next(error);
    }
  };
}

export function changeToSignUp() {
  return async dispatch => {
    try {
      dispatch(setToSignUp());
    } catch (error) {
      next(error);
    }
  };
}

export function changeToSignIn() {
  return async dispatch => {
    try {
      dispatch(setToSignIn());
    } catch (error) {
      next(error);
    }
  };
}

export function changeToProfile() {
  return async dispatch => {
    try {
      dispatch(setToProfile());
    } catch (error) {
      next(error);
    }
  };
}

export function getScores(scores) {
  return async dispatch => {
    try {
      dispatch(usersScores(scores));
    } catch (error) {
      next(error);
    }
  };
}

export function loggedInTrue() {
  return async dispatch => {
    try {
      dispatch(login());
    } catch (error) {
      next(error);
    }
  };
}

export function loggedInFalse() {
  return async dispatch => {
    try {
      dispatch(logout());
    } catch (error) {
      next(error);
    }
  };
}

export function changeLevel(level) {
  return async dispatch => {
    try {
      dispatch(newLevel(level));
    } catch (error) {
      next(error);
    }
  };
}
