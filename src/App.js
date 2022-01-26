import './App.css';
import GameBoard from './GameBoard.jsx';

const headerBarContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const gameboardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}

const App = () => {
  return (
    <div className="App">
      <div
        className="headerBarContainer"
        style={headerBarContainerStyle}>
        <h1>
          Accidental.ly (F2 - G5)
        </h1>
      </div>
      {/* <div
        className="gameboardContainer"
        style={gameboardContainerStyle}> */}
        <GameBoard />
      {/* </div> */}
    </div>
  );
}

export default App;
