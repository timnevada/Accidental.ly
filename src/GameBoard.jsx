import React, { useState } from 'react';
import Submission from './Submission.jsx';

const GameBoard = () => {
  const [currentNote, setCurrentNote] = useState('C');

  return (
    <div>
      <div className='scoreboardContainer'>
      </div>
      <div className='grandstaffContainer'>
      </div>
      <div className='submissionContainer'>
        <Submission />
      </div>
    </div>
  )
}

export default GameBoard;