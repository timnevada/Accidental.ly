import './App.css';
import GameBoard from './GameBoard.jsx';


const App = () => {
  return (
    <div className="App">
      <div className="HeaderBar">
        <h1>
          Accidental.ly
        </h1>
      </div>
      <div className="grandstaffContainer">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
