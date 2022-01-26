import UpStemNote from './UpStemNote.jsx';
import DownStemNote from './DownStemNote.jsx';

const noteColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const noteContainerStyle = {
  height: '10px',
}

const trebleClefContainerStyle = {
  height: '35%',
}

const bassClefContainerStyle = {
  height: '35%',
}

const G5ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '3px',
}

const F5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '1px',
}

const E5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '9px',
}

const D5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '18px',
}

const C5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '24px',
}

const B4ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '30px',
}

const A4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '40px',
}

const G4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '33px',
}

const F4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '26px',
}

const E4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '19px',
}

const D4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '10px',
}

const B3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '15px',
}

const A3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '9px',
}

const G3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '2px',
}

const F3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '7px',
}

const E3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '13px',
}

const D3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '19px',
}

const C3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '52px',
}

const B2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '45px',
}

const A2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '38px',
}

const G2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '29px',
}

const F2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '23px',
}

const NoteColumn = (props) => {
  return (
    <div
      className="noteColumnContainer"
      style={noteColumnStyle}>

      <div
        className="trebleClefContainer"
        style={trebleClefContainerStyle}>
        <div style={G5ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'G5'}/></div>
        <div style={F5ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'F5'}/></div>
        <div style={E5ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'E5'}/></div>
        <div style={D5ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'D5'}/></div>
        <div style={C5ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'C5'}/></div>
        <div style={B4ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'B4'}/></div>

        <div style={A4ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'A4'}/></div>
        <div style={G4ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'G4'}/></div>
        <div style={F4ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'F4'}/></div>
        <div style={E4ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'E4'}/></div>
        <div style={D4ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'D4'}/></div>
      </div>

      <div
        className="bassClefContainer"
        style={bassClefContainerStyle}>
        <div style={B3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'B3'}/></div>
        <div style={A3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'A3'}/></div>
        <div style={G3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'G3'}/></div>
        <div style={F3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'F3'}/></div>
        <div style={E3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'E3'}/></div>
        <div style={D3ContainerStyle}><DownStemNote currentNote={props.currentNote} note={'D3'}/></div>

        <div style={C3ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'C3'}/></div>
        <div style={B2ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'B2'}/></div>
        <div style={A2ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'A2'}/></div>
        <div style={G2ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'G2'}/></div>
        <div style={F2ContainerStyle}><UpStemNote currentNote={props.currentNote} note={'F2'}/></div>
      </div>
    </div>
  )
}

export default NoteColumn;