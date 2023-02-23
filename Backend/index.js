// Loading up express library, and cors library:
const express = require("express");
const cors = require("cors");
//Creating an instance of express! This will be the main instance running my webserver
const app = express();

//Telling express to use cors library
//app represents the instance of Express we are running
app.use(cors());

//Saving the port number you want to use as a vairable so you can reuse it in the future,
// or make it easy to access or update if you need to!
const PORT = 5000;

//Now need to actually START our instance of our webserver Express
// By default ports are closed, in order to have it open,
//you need to have something listening to it
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
