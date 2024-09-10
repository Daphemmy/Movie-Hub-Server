// import dotenv package and configure it
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// import routes to the app.js to the authRouter in routes folder
const authRouter = require("./routes/authRouter");

const movieRouter = require("./routes/movieRouter");

const bookmarkRouter = require("./routes/bookmarkRouter");

// import the error from the middleware folder to the app.js
const error = require("./middlewares/error");

// spins up a new express application
const app = express();

const port = 4000;

app.use(cors());

// a middleware that allows access to the req.body on all request (without this you cannot test on postman)
app.use(express.json());

// middleware for login and register authentification router
app.use("/api/auth", authRouter);

// middleware for movie router
app.use("api/movie", movieRouter);

app.use("/api/bookmark", bookmarkRouter);

// custom middleware for errors
app.use(error);

// start listen on a given port and run the callback function
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://benedictadeniran:IGimHV6pZimbd667@cluster0.g1vvw.mongodb.net/Movie-Hub?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");

    await app.listen(port, () => {
      console.log(`server is running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

// benedictadeniran

//  IGimHV6pZimbd667

// mongodb+srv://benedictadeniran:IGimHV6pZimbd667@cluster0.g1vvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
