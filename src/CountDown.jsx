import React, { useState, useContext, useEffect } from 'react';
import { Context } from './context/State.js';

const countDownContainerStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const clockContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px'
}

const clockButtonStyle = {
  padding: '10px'
}

const timesUpContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const { resetCount, timerPaused, toggleTimer } = useContext(Context);

  const tick = () => {
    if (timerPaused || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    toggleTimer(true);
    setOver(false);
    resetCount(0);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div
      className="countDownContainer"
      style={countDownContainerStyle}>

      <div
        className="clockContainer"
        style={clockContainerStyle}>
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>

      </div>
      <div
        className="timesUpContainer"
        style={timesUpContainerStyle}>{over ? "Time's up!" : ''}
      </div>

      <div
        className="buttonContainer"
        style={buttonContainerStyle}>
        {/* <button style={clockButtonStyle} onClick={() => toggleTimer(!timerPaused)}>
          {timerPaused ? 'Resume' : 'Pause'}
        </button> */}
        <button style={clockButtonStyle} onClick={() => reset()}>Restart</button>
      </div>
    </div>
  );
};

export default CountDown;