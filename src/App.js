import { Provider } from './context/State.js';
import GameBoard from './GameBoard.jsx';
import HighScores from './HighScores.jsx';

const headerBarContainerStyle = {
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
  padding: '15px'
}

const logoStyle = {
  display: 'flex',
  justifyContent: 'center'
}



const App = () => {
  return (
    <Provider>
      <div className="App">
        <div
          className="headerBarContainer"
          style={headerBarContainerStyle}>
          <h1 style={logoStyle}>accidental.ly</h1>
          <HighScores />
        </div>
          <GameBoard />
      </div>
    </Provider>
  );
}

export default App;
