// Dev Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express -- listening at localhost://3000
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev")); ///response status for deployment use
// for database mongo - workout
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

//mongoAtlas connection key: MONGOATLAS_G
const MONGOATLAS_G = process.env.MONGOATLAS_G || "mongodb://localhost/workout";
mongoose.connect(MONGOATLAS_G, { useNewUrlParser: true });


// routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Servering listening to our port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
