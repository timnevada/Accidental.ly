import React from 'react';
import downstem from './images/downstem.png';

const downstemStyle = {
  height: '150px'
}

const downstemStyleHidden = {
  height: '150px',
  opacity: '0'
}


const DownStemNote = (props) => {

const downstemIsSelected = (props.currentNote === props.note) ? downstemStyle : downstemStyleHidden

  return (
    <span
      className="downstemContainer">
      <img
        style={downstemIsSelected}
        src={downstem}>
      </img>
    </span>
  )
}

export default DownStemNote;