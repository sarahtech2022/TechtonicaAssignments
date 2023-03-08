import { useState, useEffect } from "react";
const QuestionCard = (props) => {
  const [answer, setAnswer] = useState("");
  //dont need to declare the parameter userAnswer
  //user answer will have a value of true or false depending on lines 15 and 16, and thats because of the onclick!
  //the onclick- when the true button is clicked, we call the function compare answers, if the user clicks true the value of userAnswer is true
  const compareAnswers = (userAnswer) => {
    setAnswer(userAnswer);
    if (userAnswer === true) {
      return "Your answer is correct!";
    }
  };

  //arrow means its an arrow function
  //anonymous function means it has no name and cant referenced, but can have an arrow
  return (
    <div className={"question-section"}>
      <div className="question-text">{props.question.question}</div>
      <div className="answer-section">
        <button onClick={() => compareAnswers(true)}>True</button>
        <button onClick={() => compareAnswers(false)}>False</button>
        {/* Onclick takes on a function to call! Onclick itself is a prop for the button. onClick REQUIRES for u to give it 
        a function for IT to call, otherwise u are just calling the function manually and it returns undefined! so we need to add () => in FRONT to allow onClick to do that
        ONclick is recieving a function it can call! when it valls it- it triggers the compareAnswers function*/}
      </div>
    </div>
  );
};

export default QuestionCard;
