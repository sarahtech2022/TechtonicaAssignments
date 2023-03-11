import { useState, useEffect } from "react";
import "./question.css";
const QuestionCard = (props) => {
  const [answer, setAnswer] = useState("");
  const [disable, setDisable] = useState(false);
  //dont need to declare the parameter userAnswer
  //user answer will have a value of true or false depending on lines 15 and 16, and thats because of the onclick!
  //the onclick- when the true button is clicked, we call the function compare answers, if the user clicks true the value of userAnswer is true
  const compareAnswers = (userAnswer) => {
    if (userAnswer === props.question.correct_answer) {
      setAnswer(true); //upate our answer to what they select, but its not necessairly telling us if it was right or wrong
      // to update you call it, with the new value inside
      //This means answer now equals true
      props.counterFunction(true);
      setDisable(true);
    } else {
      setAnswer(false);
      props.counterFunction(false);
      setDisable(true);
    }
  };
  //callback function to game after, to tell game component whether user got it right or wrong.
  //arrow means its an arrow function
  //anonymous function means it has no name and cant referenced, but can have an arrow

  //Pass in this function counterFunction to get the data about if they answered the Q correctly call this function with the data

  return (
    <div
      className={
        answer === "" ? "question-section" : answer === true ? "green" : "red"
      }
    >
      <div className="question-text">{props.question.question} </div>
      {/* the first question is referencing the prop passed in from the game component,
      the second question is the question key from the actual array of objects of questions! */}
      <div className="answer-section">
        <button disabled={disable} onClick={() => compareAnswers("True")}>
          True
        </button>
        <button disabled={disable} onClick={() => compareAnswers("False")}>
          False
        </button>
        {answer === "" ? null : (
          <p>That was {answer === true ? "true" : "false"}!</p>
        )}
        {/* if statement should go here because we are conditionally rendering JSX (muyst use ternary operator) */}
        {/* Onclick takes on a function to call! Onclick itself is a prop for the button. onClick REQUIRES for u to give it 
        a function for IT to call, otherwise u are just calling the function manually and it returns undefined! so we need to add () => in FRONT to allow onClick to do that
        ONclick is recieving a function it can call! when it valls it- it triggers the compareAnswers function*/}
      </div>
    </div>
  );
};

export default QuestionCard;
