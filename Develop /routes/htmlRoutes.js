let path = require("path"); 


module.exports = funciton (app) {

//html index.js route
 app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.js"));
   });

//html exercise.js route
    app.get("/exercise", function (req,res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

//html stats.js route 
  app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}