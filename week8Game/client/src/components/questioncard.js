const QuestionCard = (props) => {
  //dont need to declare the parameter userAnswer
  //user answer will have a value of true or false depending on lines 15 and 16, and thats because of the onclick!
  //the onclick- when the true button is clicked, we call the function compare answers, if the user clicks true the value of userAnswer is true
  const compareAnswers = (userAnswer) =>{
    if (userAnswer === true)
  }
  props.answer;
//arrow means its an arrow function
//anonymous function means it has no name and cant referenced, but can have an arrow
  return (
    <div className={"question-section"}>
      <div className="question-text">{props.question.question}</div>
      <div className="answer-section">
        <button onClick={compareAnswers(true)}>True</button>
        <button onClick={compareAnswers(false)}>False</button>
      </div>
    </div>
  );
};

export default QuestionCard;
