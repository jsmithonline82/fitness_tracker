const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const db = require('./config/keys').MongoURI;

mongoose.connect(process.env.MongoURI|| "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//require(apiRoute)(app);
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
