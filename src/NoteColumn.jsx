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
  opacity: '0'
}

const F5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '1px',
  opacity: '1'
}

const E5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '9px',
  opacity: '0'
}

const D5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '18px',
  opacity: '1'
}

const C5ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '24px',
  opacity: '0'
}

const B4ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '30px',
  opacity: '1'
}

const A4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '40px',
  opacity: '0'
}

const G4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '33px',
  opacity: '1'
}

const F4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '26px',
  opacity: '0'
}

const E4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '19px',
  opacity: '1'
}

const D4ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '10px',
  opacity: '0'
}

const B3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '15px',
  opacity: '1'
}

const A3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '9px',
  opacity: '0'
}

const G3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '2px',
  opacity: '1'
}

const F3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '7px',
  opacity: '0'
}

const E3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '13px',
  opacity: '1'
}

const D3ContainerStyle = {
  height: '10px',
  position: 'relative',
  top: '19px',
  opacity: '0'
}

const C3ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '52px',
  opacity: '1'
}

const B2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '45px',
  opacity: '0'
}

const A2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '38px',
  opacity: '1'
}

const G2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '29px',
  opacity: '0'
}

const F2ContainerStyle = {
  height: '10px',
  position: 'relative',
  bottom: '23px',
  opacity: '1'
}

const NoteColumn = () => {
  return (
    <div
      className="noteColumnContainer"
      style={noteColumnStyle}>

      <div
        className="trebleClefContainer"
        style={trebleClefContainerStyle}>
        <div style={G5ContainerStyle}><DownStemNote /></div>
        <div style={F5ContainerStyle}><DownStemNote /></div>
        <div style={E5ContainerStyle}><DownStemNote /></div>
        <div style={D5ContainerStyle}><DownStemNote /></div>
        <div style={C5ContainerStyle}><DownStemNote /></div>
        <div style={B4ContainerStyle}><DownStemNote /></div>

        <div style={A4ContainerStyle}><UpStemNote /></div>
        <div style={G4ContainerStyle}><UpStemNote /></div>
        <div style={F4ContainerStyle}><UpStemNote /></div>
        <div style={E4ContainerStyle}><UpStemNote /></div>
        <div style={D4ContainerStyle}><UpStemNote /></div>
      </div>

      <div
        className="bassClefContainer"
        style={bassClefContainerStyle}>
        <div style={B3ContainerStyle}><DownStemNote /></div>
        <div style={A3ContainerStyle}><DownStemNote /></div>
        <div style={G3ContainerStyle}><DownStemNote /></div>
        <div style={F3ContainerStyle}><DownStemNote /></div>
        <div style={E3ContainerStyle}><DownStemNote /></div>
        <div style={D3ContainerStyle}><DownStemNote /></div>

        <div style={C3ContainerStyle}><UpStemNote /></div>
        <div style={B2ContainerStyle}><UpStemNote /></div>
        <div style={A2ContainerStyle}><UpStemNote /></div>
        <div style={G2ContainerStyle}><UpStemNote /></div>
        <div style={F2ContainerStyle}><UpStemNote /></div>
      </div>
    </div>
  )
}

export default NoteColumn;