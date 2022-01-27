import './scroll.css';
import Score from './Score.jsx';

const HighScores = (props) => {

  let scoresArray = props.highScores.data ? props.highScores.data : []
  return (
    <div id="scroll-container">
      <div id="scroll-text">
        {scoresArray.map(item =>
          <Score
            key={item.id}
            name={item.name}
            correct={item.correct}
            incorrect={item.incorrect}/>
        )}
      </div>
    </div>
  )
}

export default HighScores