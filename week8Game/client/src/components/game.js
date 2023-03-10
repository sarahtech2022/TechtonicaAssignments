import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
//props coming in from APP to game
const Game = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  //questions comes as an array of objects
  //property on it is called results
  const loadData = () => {
    fetch("http://localhost:5050/api/game")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 13", data.results);
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
  //Want to notify the parent on if the user got it right or wrong!
  //Pass the function as a prop from PARENT to child, then the child can give it back
  //updateCounter and counterFunction are essentially the same thing but in diff components, both want to update the counter
  //updateCounter will be called from inisde question card (thats what props.couunderFunction) and it will be given data that is true or false from question card, which triggers it to run
  //onlu need to reference it as a prop if in child component!!!
  const updateCounter = (gotCorrectAnswer) => {
    if (gotCorrectAnswer === true) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="Container">
      <div className="question-count">
        <span className="fonttop">Question 1/{questions.length}</span>
      </div>
      {questions.map((question, index) => {
        return (
          <QuestionCard
            key={index}
            question={question}
            counterFunction={updateCounter}
            // hey counter function is going to equal this variable! updateCounter is a variable
          />
        );
        //questions is the ARRAY of questions, and question is just a single instance of one question!
        //key is just a key identifer, key is a special prop that JSX components have
        //key is a way to keep track of each JSX element (whenver u are inside the loop, any tag needs a key!!!! )
        // any attribute part of a JSX component is a prop, className is a prop of div
        //Q: why a return inside of a return
      })}
      <span className="fontbottom">SCORE: You got {counter}/ 10 right! </span>
    </div>
  );
};

export default Game;
