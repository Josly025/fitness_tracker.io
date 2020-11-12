//requiring the path package for path.join(___dirname, " ")
let path = require("path");

// 3 html files // exercise, index, and stats
module.exports = function (app) {
  //html index.js route
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.js"));
  });

  //html exercise.js route
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //html stats.js route
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
