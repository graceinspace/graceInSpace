import { GAME_OVER , SCORE } from './gameActions'



const initialState = {
  score: 0,
  gameStatus: false
}



export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case GAME_OVER:
      return {...state, gameStatus: true}
    case SCORE:
      return {...state, score: state.score + 1}
    default:
      return state
  }
}
