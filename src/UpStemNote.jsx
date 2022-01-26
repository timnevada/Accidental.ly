import React from 'react';
import upstem from './images/upstem.png';

const upstemStyle = {
  height: '130px'
}

const UpStemNote = () => {
  return (
    <span
      className="upstemContainer">
      <img
        style={upstemStyle}
        src={upstem}>
      </img>
    </span>
  )
}

export default UpStemNote;