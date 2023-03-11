import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

// For testing my API I saving one response in a .js file
import fakedata from "./fakedata.js";

const app = express();
const PORT = 5050;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica Server for a Game");
});

// Make the GET request for the GAME Api for grabbing all the questions

// //hardcode the game response for testing reasons to don't saturate my API call.
app.get("/api/game", async (req, res) => {
  try {
    const URL =
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean";
    const apiRequest = await fetch(URL);
    const questions = await apiRequest.json();
    res.send(questions);
    console.log(apiRequest);
  } catch (err) {
    console.log(err);
  }
});
//Two responses, one from our get request and one from a fetch
//res is the response from the get request
//apiRequest is the response from the fetch
//When you do a fetch u get a response back- the response itself
//has diff pieces of info: a status code, headers, and a body
//inside ur body is where json is, http codes in status code, headers has metadata
//apiRequest has everything status code, body, and header
//We extract the body and convert it to json
//fetch returns a promise, so whenever it hits await, it basically pauses
//The rest of ur code doesnt make sense to run without having this information, thats why we need await
//Waiting (awaiting) for that promise to resolve (that promise has completed.)
//.Json returns another promise thats why we have another await there!!
//Anytime funvtion has await inside of it, the function must be asycn, so u ned to declare that
//its necessary from a technical point of view, a promise is a promise and something needs to wait for that promise to resolve
//making the promise resolve (rather than handling it urself with a .then- what u run t tell it what to execute after the promise has resolved)
//when u write async you are letting Express handle the promise rather than u!!
//JS runs asynchronously, it does run top to bottom**
app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
