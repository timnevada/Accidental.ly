const Score = (props) => {
  return (
    <div>
      Name: <span>{props.name} </span> Correct: <span>{props.correct} </span> Wrong: <span>{props.incorrect}       </span>
    </div>
  )
}

export default Score;