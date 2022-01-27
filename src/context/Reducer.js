export default (state, action) => {
  switch(action.type) {
    case 'GET_HIGH_SCORES':
      return {
        ...state,
        highScores: action.payload
      }
    case 'POST_NEW_SCORE':
      return {
        ...state,
        highScores: action.payload
      }
    case 'INCREMENT_CORRECT_COUNT':
      return {
        ...state,
        correctCount: action.payload
      }
    case 'INCREMENT_INCORRECT_COUNT':
      return {
        ...state,
        correctCount: action.payload
      }
    case 'RESET_COUNT':
      return {
        ...state,
        correctCount: action.payload,
        incorrectCount: action.payload
      }
    case 'TOGGLE_TIMER':
      return {
        ...state,
        timerPaused: action.payload
      }
    default:
      return state;
  }
}