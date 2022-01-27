import React, { useState, useEffect } from 'react';

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


const CountDown = ( props, { hours = 0, minutes = 0, seconds = 15 } ) => {
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (props.isPaused || over) return;
    if (h === 0 && m === 0 && s === 0) {
      setOver(true)
      submitScore();
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    props.toggle(true);
    setOver(false);
    props.updateCorrect(0);
    props.updateIncorrect(0);
  };

  const submitScore = () => {
    console.log('submitting score...');
    if (props.username) {
      props.postScore(props.username, props.correctScore, props.incorrectScore);
      console.log('score submitted?');
    }
  }

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
        style={timesUpContainerStyle}>
          {over ? "Time's up!" : ''}
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