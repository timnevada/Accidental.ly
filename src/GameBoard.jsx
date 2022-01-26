import React, { useState } from 'react';
import Submission from './Submission.jsx';
import GrandStaff from './GrandStaff.jsx';

const boardContainerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const grandstaffContainerStyle = {
  width: '100%',
  marginBottom: '100px'
}

const submissionContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',

}

const GameBoard = () => {
  const [currentNote, setCurrentNote] = useState('C');

  return (
    <div
      className='boardContainer'
      style={boardContainerStyle}>
      <div className='scoreboardContainer'>
      </div>
      <div
        className='grandstaffContainer'
        style={grandstaffContainerStyle}>
        <GrandStaff currentNote={currentNote}/>
      </div>
      <div className='submissionContainer'
              style={submissionContainerStyle}>
        <Submission setCurrentNote={setCurrentNote}/>
      </div>
    </div>
  )
}

export default GameBoard;