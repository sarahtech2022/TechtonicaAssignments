import "./App.css";
import { useState } from "react";
import WeatherForm from "./components/weatherForm";
import WeatherCard from "./components/weatherCard";

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    fetch("http://localhost:8080/api/weather")
      .then((response) => response.json()) //response will be a really long string which can be converted to JSON, we convert using .json! when that happens its not longer a response its a result of the json function!
      .then((result) => {
        //console.log(result)
        setCity(result.name); //replacing the empty string to the name that the user entered by calling that function with that new name //ALSO change the setup based on how my object from the json function organized it! the way the weather app organized there is different
        setResult(result); //replcing that result by calling setResult function and putting in that result which we got from the response which we converted to json format
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadCity();
  };

  return (
    <div className="App">
      <WeatherForm city={city} handleSubmit={handleSubmit} />
      {/* The line below this is a ternary statement which is basically an if statement saying that if you dont click the button then display this click the button sentence, so weather card isnt even showing at first because it isnt supposed to!  */}
      {!result ? (
        <p>Please click the button to see Data</p>
      ) : (
        <WeatherCard data={result} />
      )}
    </div>
  );
}

export default App;
