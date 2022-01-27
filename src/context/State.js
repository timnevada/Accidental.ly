import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer.js';
const axios = require('axios');

const initialState = {
  timerPaused: true,
  correctCount: 0,
  incorrectCount: 0
}

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

    function getAllScores () {
      axios.get('/api/getAllScores')
      .then((response) => {
        dispatch({
          type: 'GET_ALL_SCORES',
          payload: response
          });
        })
      .catch((error) => {
        console.log(error);
      })
    }

    function postScore () {
      axios.get('/api/postScore')
      .then((response) => {
        dispatch({
          type: 'POST_NEW_SCORE',
          payload: response
          });
        })
      .catch((error) => {
        console.log(error);
      })
    }

  function updateCorrectCount (id) { dispatch({ type: 'INCREMENT_CORRECT_COUNT', payload: id })}

  function updateIncorrectCount (id) { dispatch({ type: 'INCREMENT_INCORRECT_COUNT', payload: id })}

  function resetCount (id) { dispatch({ type: 'RESET_COUNT', payload: id })}

  function toggleTimer (id) { dispatch({ type: 'TOGGLE_TIMER', payload: id })}

  return (
    <Context.Provider value={{
      resetCount,
      toggleTimer,
      updateCorrectCount,
      updateIncorrectCount,
      timerPaused: state.timerPaused,
      correctCount: state.correctCount,
      incorrectCount: state.incorrectCount,
    }}>
      {children}
      </Context.Provider>)
}