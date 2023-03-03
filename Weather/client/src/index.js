const express = require("express");
const cors = require("cors");
require("dotenv").config(
  "/Users/tpl522_11/code/TechtonicaAssignments/Weather/server/.env"
);
//const dataWeather = require("./data");

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// creates an endpoint for the route /api/weather
app.get("/weather", (req, res) => {
  const city = req.query.cityName;
  //const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: req.query.cityName,
    appid: "cfcfef3e000f27583876a6dda964524f",
    units: "imperial",
  });
  const url = `http://api.openweathermap.org/data/2.5/weather?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
});

// console.log
