
export const SCORE = "SCORE"
export const GAME_OVER = "GAME_OVER"

//action creator

export const updateScore = (num) => {
  return {
    type: SCORE,
    num
  }
}

export const gameRunning = () => {
  return {
    type: GAME_OVER
  }
}

//thunk
export function upCount(num) {
  return async(dispatch) => {
    try {
      dispatch(updateScore(num))
    } catch (error) {
      next('error in upCount thunk >>',error)
    }
  }
}
