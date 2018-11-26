const express = require("express");
const colors = require('colors');
const moment = require('moment');

const mongoose = require("mongoose");
const routes = require("./routes");

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI || "mongodb://localhost/convolutionary";
const SERVER_NAME = process.env.SERVER_NAME || "CONVOLUTIONARY";

const app = express();
const startTime = moment().format('MMMM Do YYYY, h:mm a');

// console color theme
colors.setTheme({
  error: 'red',
  warn: 'yellow',
  link: ['cyan', 'underline'],
  info: ['black', 'bold', 'bgWhite', 'italic'],
});

// body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets
app.use(express.static("client/build"));

// app routes
app.use(routes);

// connect to mongo db
mongoose.connect( DB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// start the API server
app.listen(PORT, function () {
  console.log('');
  console.log(` ${SERVER_NAME} `.info + '\n');
  console.log(` 🕰   Server started on ${startTime} \n`);
  console.log(` 📡  Server ready at ` + `http://${HOST}:${PORT}`.link + '\n');
});
