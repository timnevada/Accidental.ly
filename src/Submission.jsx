import React, { useState } from 'react';

const inputFieldStyle = {
  padding: '10px'
}

const submitButtonStyle = {
  padding: '10px'
}

const Submission = (props) => {
  const [noteSubmission, setNoteSubmission] = useState('');

  const submitNote = (event) => {
    event.preventDefault();
    console.log(noteSubmission);
    props.setCurrentNote(noteSubmission);
    setNoteSubmission('');
  }

  return (
    <div>
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
  )
}

export default Submission;