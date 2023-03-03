import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from openweather api
  const loadCity = (city) => {
    // pass city name as a param 
    const params = new URLSearchParams({ cityName: city });
    // fetch the data from the backe