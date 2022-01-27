import React, { useContext, useState } from 'react';
import { Context } from './context/State.js';
import GrandStaff from './GrandStaff.jsx';
import ImageModal from './ImageModal.jsx';
import CountDown from './CountDown.jsx';

const boardContainerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const grandstaffContainerStyle = {
  width: '100%',
  marginBottom: '20px'
}

const scoreboardAndSubmissionContainerStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const submissionContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: '30px'
}

const scoreboardContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const scoreBoardModuleStyle = {
  padding: '10px'
}

/*
const correctCountStyle = {
  padding: '10px'
}

const incorrectCountStyle = {
  padding: '10px'
}

const inputFormStyle = {
  margin: '10px'
}
*/

const inputFieldStyle = {
  padding: '10px'
}

const submitButtonStyle = {
  padding: '10px'
}


const canNotReadSheetMusicContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px'
}

const CMajorBassClef = ['F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];
const CMajorTrebleClef = ['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'];
const CMajor = CMajorBassClef.concat(CMajorTrebleClef);
const currentKey = CMajor;

const randomizeNote = (allNotesArray) => {
  return allNotesArray[Math.floor(Math.random() * allNotesArray.length)];
}

const GameBoard = () => {
  const [playerName, setPlayerName] = useState('');
  const [savedName, savePlayerName] = useState('');
  const [currentNote, setCurrentNote] = useState('C5');
  const [noteSubmission, setNoteSubmission] = useState('');
  const [greetingVisibility, showGreeting] = useState(false);
  const [displayImageModal, setDisplayImageModal] = useState(false);

  const {
    resetCount, toggleTimer,
    correctCount, incorrectCount,
    updateCorrectCount, updateIncorrectCount
  } = useContext(Context);

  const submitNote = (event) => {
    event.preventDefault();
    toggleTimer(false);
    if (currentNote.toLowerCase().includes(noteSubmission) || currentNote.includes(noteSubmission)) {
      updateCorrectCount(correctCount + 1)
    } else {
      updateIncorrectCount(incorrectCount + 1)
    }
    setCurrentNote(randomizeNote(currentKey));
    setNoteSubmission('');
  }

  const openModal = (event) => {
    event.preventDefault();
    setDisplayImageModal(true);
  }

  const saveName = (event) => {
    event.preventDefault();
    savePlayerName(playerName);
    showGreeting(true);
  }

  const greetingStyleVis = {
    display: 'flex',
    justifyContent: 'center'
  }

  const greetingStyleInvis = {
    opacity: '0'
  }

  const greeting = ('Hello ' + savedName + '!');
  const greetingStyle = savedName ? greetingStyleVis : greetingStyleInvis

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
        className="scoreboardAndSubmissionContainer"
        style={scoreboardAndSubmissionContainerStyle}>
          <CountDown seconds={30}/>
          <div
            className="scoreboardLabelsContainer"
            style={scoreboardContainerStyle}>
            <div className="correctCountLabel" style={scoreBoardModuleStyle}>Correct</div>
            <div className="incorrectCountLabel" style={scoreBoardModuleStyle}>Incorrect</div>
          </div>
          <div
            className="scoreboardContainer"
            style={scoreboardContainerStyle}>
            <div className="correctCount" style={scoreBoardModuleStyle}>{correctCount}</div>
            <div className="incorrectCount" style={scoreBoardModuleStyle}>{incorrectCount}</div>
          </div>
        <div className='submissionContainer'
              style={submissionContainerStyle}>
            <form>
              <input
                className="inputField"
                style={inputFieldStyle}
                type="text"
                value={noteSubmission}
                onChange={(event) => setNoteSubmission(event.target.value)}>
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
      <div
        className="canNotReadSheetMusicContainer"
        style={canNotReadSheetMusicContainerStyle}>
        Can't read sheet music?&nbsp;<a onClick={openModal}> Click here </a>&nbsp;for a quick reference.
        {displayImageModal && (<ImageModal toggleImageModal={setDisplayImageModal} />)}
      </div>
      <div style={canNotReadSheetMusicContainerStyle}>Enter your name below to save your high score!</div>
        <div className='submissionContainer'
              style={submissionContainerStyle}>
            <form>
              <input
                className="inputField"
                style={inputFieldStyle}
                type="text"
                onChange={(event) => setPlayerName(event.target.value)}>
              </input>
              <button
                className="submitButton"
                style={submitButtonStyle}
                onClick={saveName}>
                Enter
              </button>
            </form>
        </div>
          <div
            className="greetingContainer"
            style={greetingStyle}>
            {greeting}
          </div>
    </div>
  )
}

export default GameBoard;