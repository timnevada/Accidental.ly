import React from 'react';
import downstem from './images/downstem.png';

const downstemStyle = {
  height: '150px'
}

const DownStemNote = () => {
  return (
    <span
      className="downstemContainer">
      <img
        style={downstemStyle}
        src={downstem}>
      </img>
    </span>
  )
}

export default DownStemNote;