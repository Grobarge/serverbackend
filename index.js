const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

// port number which our app needs to be started
const port = process.env.PORT || 3001;

// using the logger (morgan) package to get log details
app.use(logger('dev'));

// used for providing Connect/Express middleware 
app.use(cors());

// Used to handle HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

app.listen(port, function () {
    console.log("Running on " + port);
})
module.exports = app;