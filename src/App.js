// import React, { useState, useEffect } from 'react';
// import { Provider } from './context/State.js';
import React from 'react';
import GameBoard from './GameBoard.jsx';
import HighScores from './HighScores.jsx';

const axios = require('axios');

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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highScores: []
    }
    this.postScore = this.postScore.bind(this);
  }

  getScores = () => {
    axios.get('http://localhost:5000/api/getScores')
    .then((response) => {
      this.setState({
        highScores: response
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  postScore = (username, correct, incorrect) => {
    let data = {
      name: username,
      correct: correct,
      incorrect: incorrect
    }
      axios.post('http://localhost:5000/api/postScore', data)
      .then((response) => {
        console.log('1', data)
        console.log('2', response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getScores();
  }

  render () {
    return (
      <div className="App">
        <div
          className="headerBarContainer"
          style={headerBarContainerStyle}>
          <h1 style={logoStyle}>accidental.ly</h1>
          <HighScores
            highScores={this.state.highScores}/>
        </div>
          <GameBoard
            postNewScore={this.postScore}
          />
      </div>
    )
  }
}

// const [highScores, setHighScores] = useState([]);

// const getScores = () => {
//   axios.get('http://localhost:5000/api/getScores')
//   .then((response) => {
//     this.setState({
//       highScores: response
//     })
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }

// const App = () => {

//   // useEffect(() => {
//   //   getScores()
//   //   return (() => {
//   //     setHighScores([])
//   //   })
//   // }, [])

//   return (
//     <Provider>
//       <div className="App">
//         <div
//           className="headerBarContainer"
//           style={headerBarContainerStyle}>
//           <h1 style={logoStyle}>accidental.ly</h1>
//           <HighScores
//             highScores={highScores}/>
//         </div>
//           <GameBoard />
//       </div>
//     </Provider>
//   );
// }

export default App;
