import React from 'react';
import upstem from './images/upstem.png';

const upstemStyle = {
  height: '130px'
}

const upstemStyleHidden = {
  height: '130px',
  opacity: '0'
}


const UpStemNote = (props) => {

  const upstemIsSelected = (props.currentNote === props.note) ? upstemStyle : upstemStyleHidden

  return (
    <span
      className="upstemContainer">
      <img
        style={upstemIsSelected}
        src={upstem}>
      </img>
    </span>
  )
}

export default UpStemNote;