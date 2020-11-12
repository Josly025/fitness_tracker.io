// Dev Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express -- listening at localhost://3000
const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
// for database mongo - workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Servering listening to our port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
