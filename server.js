const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose connecting to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//routes
app.use(require('./routes/api.js'));
app.use(require('./routes/homeRoutes.js'));


app.listen(PORT, () => {
    console.log(`|~~~~~~~~~~~~~ App is currently running on ${PORT} ~~~~~~~~~~~~~|`)
})