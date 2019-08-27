import allObjects from "../objects"; //arr of objects
export const SCORE = "SCORE";
export const GAME_LOST = "GAME_LOST";
export const GAME_WON = "GAME_WON";
export const UNSET = "UNSET";
export const SPACE = "SPACE";
export const GET_OBJECTS = "GET_OBJECTS";
export const SHOW_ITEMS = "SHOW_ITEMS";
export const SECONDS = "SECONDS";
export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN"
export const PROFILE = "PROFILE"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
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

export const setToUnset = () => {
  return {
    type: UNSET
  };
};

export const setToSpace = () => {
  return {
    type: SPACE
  };
};

export const getObjects = obj => {
  return {
    type: GET_OBJECTS,
    obj: allObjects
  };
};

export const showItems = () => {
  return {
    type: SHOW_ITEMS
  };
};

export const getSeconds = () => {
  return {
    type: SECONDS
  };
};

export const setToSignUp = () => {
  return {
    type: SIGNUP
  };
};

export const setToSignIn = () => {
  return {
    type: SIGNIN
  }
}

export const setToProfile = () => {
  return {
    type: PROFILE
  }
}


export const login = () => {
  return {
    type: LOGIN
  }
}


export const logout = () => {
  return {
    type: LOGOUT
  }
}

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


export function loggedInTrue() {
  return async dispatch => {
    try {
      dispatch(login())
    } catch (error) {
      next(error)
    }
  }
}

export function loggedInFalse() {
  return async dispatch => {
    try {
      dispatch(logout())
    } catch (error) {
      next(error)
    }
  }
}

