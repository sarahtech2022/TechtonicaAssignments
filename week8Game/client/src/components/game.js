import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);

  const loadData = () => {
    fetch("http://localhost:5050/api/game")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 11", data.results);
        setQuestions(data.results);
      });
  };
  //2 steps to fetching data, front end is fetching it from your backend (also http request)
  //backend is fetching the data from the open trivia database with a seperate http request (API)
  //The front end will start fetching first to the backend, then backend makes a request to API, then the backend
  //gets a response from the API, then a final step it sends the response to the front end.
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Container">
      <div className="question-count">
        <span>Question 1</span>/{questions.length}
      </div>
      {questions.map((question, index) => {
        return <QuestionCard key={index} question={question} />;
      })}
    </div>
  );
};

export default Game;
