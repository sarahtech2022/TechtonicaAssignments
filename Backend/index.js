// Loading up express library, and cors library:
const express = require("express");
const cors = require("cors");
//Creating an instance of express! This will be the main instance running my webserver
const app = express();

//Telling express to use cors library
//app represents the instance of Express we are running
app.use(cors());
app.use(express.json()); //We had to add this to get it to work! Vladimir- link!!! To add support to express to let it parse incoming JSON! This is great because it does it automatically for us!!

//Saving the port number you want to use as a vairable so you can reuse it in the future,
// or make it easy to access or update if you need to!
const PORT = 5000;

let teas = [
  {
    name: "lavendar chamomile tea",
    caffeinated: false,
    rating: 8,
  },
  {
    name: "green tea",
    caffeinated: true,
    rating: 9,
  },
];

//Code should stay inside existing routes!!!! the stuff inside the curly braces are the code thats
//going to execute when someone hits those routes! Put the stuff before res.json! BEcause res.json is saying what response u want from the server, which should be
//the very last thing any route should do!

app.get("/api/teas", (req, res) => {
  res.json(teas);
});

app.post("/api/teas", (req, res) => {
  console.log(req.body);
  //In postman we are sending the data from postman to this route, this data is in the
  //body of the request. For now assume data will be in string format.
  //first line is getting the body and converting it from string to object!!
  //Now that we have it as an object and its save in
  //the new variable called request body, we then can push it on to the teas array!
  //The last bit is u responding with the updated teas array!!!
  //   const requestBody = JSON.parse(req.body); --> this is NOT needed and causing errors
  teas.push(req.body);
  res.json(teas);
});

app.delete("/api/teas", (req, res) => {
  //Query parameter hint!!!!
  res.json(teas);
});

//Now need to actually START our instance of our webserver Express
// By default ports are closed, in order to have it open,
//you need to have something listening to it
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
//are we listening for an HTTP request? Or should our Port be open once we set up express?
