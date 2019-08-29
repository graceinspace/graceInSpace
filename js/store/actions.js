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
export const SIGNIN = "SIGNIN";
export const PROFILE = "PROFILE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const USERS_SCORES = "USERS_SCORES";
export const CHANGE_LEVEL = "CHANGE_LEVEL";

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
  };
};

export const setToProfile = () => {
  return {
    type: PROFILE
  };
};

export const usersScores = scores => {
  return {
    type: USERS_SCORES,
    scores
  };
};

export const login = () => {
  return {
    type: LOGIN
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const newLevel = level => {
  return {
    type: CHANGE_LEVEL,
    level
  };
};


