import React, { useState } from 'react';
// import Submission from './Submission.jsx';
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

const scoreboardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const correctCountStyle = {
  padding: '10px'
}

const incorrectCountStyle = {
  padding: '10px'
}

const inputFieldStyle = {
  padding: '10px'
}

const submitButtonStyle = {
  padding: '10px'
}

const CMajorBassClef = ['F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];
const CMajorTrebleClef = ['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'];
const CMajor = CMajorBassClef.concat(CMajorTrebleClef);
const currentKey = CMajor;

const randomizeNote = (allNotesArray) => {
  return allNotesArray[Math.floor(Math.random() * allNotesArray.length)];
}

const GameBoard = () => {
  const [currentNote, setCurrentNote] = useState('C5');
  const [noteSubmission, setNoteSubmission] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const submitNote = (event) => {
    event.preventDefault();

    if (currentNote.toLowerCase().includes(noteSubmission) || currentNote.includes(noteSubmission)) {
      setCorrectCount(correctCount + 1);
      console.log(correctCount);
    } else {
      setIncorrectCount(incorrectCount + 1);
      console.log(incorrectCount);
    }

    console.log(noteSubmission);

    setCurrentNote(randomizeNote(currentKey));


    console.log(currentNote);
    setNoteSubmission('');
  }

  return (
    <div
      className='boardContainer'
      style={boardContainerStyle}>

      <div
        className='grandstaffContainer'
        style={grandstaffContainerStyle}>
        <GrandStaff
          currentKey={currentKey}
          randomizeNote={randomizeNote}
          setCurrentNote={setCurrentNote}
          currentNote={currentNote}/>
      </div>
      <div
        className="scoreboardAndSubmissionContainer">
          <div
            className="scoreboardLabelsContainer"
            style={scoreboardContainerStyle}>
            <div className="correctCountLabel" style={correctCountStyle}>Correct</div>
            <div className="incorrectCountLabel" style={incorrectCountStyle}>Incorrect</div>
          </div>
          <div
            className="scoreboardContainer"
            style={scoreboardContainerStyle}>
            <div className="correctCount" style={correctCountStyle}>{correctCount}</div>
            <div className="incorrectCount" style={incorrectCountStyle}>{incorrectCount}</div>
          </div>
        <div className='submissionContainer'
              style={submissionContainerStyle}>
            <form>
              <input
                className="inputField"
                style={inputFieldStyle}
                type="text"
                value={noteSubmission}
                onChange={(event) =>
                  {
                    setNoteSubmission(event.target.value)
                  }
                }>
              </input>
              <button
                className="submitButton"
                style={submitButtonStyle}
                onClick={submitNote}>
                Enter
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default GameBoard;