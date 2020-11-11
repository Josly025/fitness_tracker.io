// Dev Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Express -- listening at localhost://3000
const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// for database mongo - workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Servering listening to our port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
