import React, { useState } from 'react';

const Submission = () => {
  const [noteSubmission, setNoteSubmission] = useState('');

  const submitNote = (event) => {
    event.preventDefault();
    console.log(noteSubmission);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(event) => setNoteSubmission(event.target.value)}>
        </input>
        <button
          className="submitButton"
          onClick={submitNote}>
          Submit!
        </button>
      </form>
    </div>
  )
}

export default Submission;