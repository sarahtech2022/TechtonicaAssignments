const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = 8081;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// connects to the open weather api
app.get("/weather", (req, res) => {
  const city = req.query.cityName;
  const apiKey = "0e9342e28737ba69d50dca7f36aec7e6";
  const params = new URLSearchParams({
    q: req.query.cityName,
    appid: apiKey,
    units: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
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

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
