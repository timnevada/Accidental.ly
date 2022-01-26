import React, { useState } from 'react';
import NoteColumn from './NoteColumn.jsx';

const grandStaffStyle = {
  height: '500px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/4c/Grand_staff.svg)`,
  display: 'flex',
  justifyContent: 'center'
}

const GrandStaff = (props) => {
  return (
    <div
      className="grandStaff"
      style={grandStaffStyle}>
      <NoteColumn currentNote={props.currentNote}/>
    </div>
  )
}

export default GrandStaff