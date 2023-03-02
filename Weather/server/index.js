const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataWeather = require("./data");

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// creates an endpoint for the route /api/weather
app.get("/api/weather/", (req, res) => {
  //const //cityName is a query parameter uses ?,  route parameter uses :
  res.json({
    name: dataWeather.weather[0].name,
    country: dataWeather.weather[0].sys.country,
    description: dataWeather.weather[0].description,
    feels_like: dataWeather.weather[0].main.feels_like,
    icon: `http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`, // @2x makes icon two times the size, back ticks, the icon from weather app is: 04d.png but we should access it from the object in data.js
    temp: dataWeather.weather[0].main.temp,
    pressure: dataWeather.weather[0].main.pressure,
    clouds: dataWeather.weather[0].clouds.all,
    wind: dataWeather.weather[0].wind.speed,
    sunrise: dataWeather.weather[0].sys.sunrise,
    sunset: dataWeather.weather[0].sys.sunset,
  });
});

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
