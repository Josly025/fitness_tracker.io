//requiring our workout model
const Workout = require("../models/workout.js");

module.exports = function (app) {

/// GET ALL route 
app.post("/api/workouts", (req, res) => {
    // FInd all workouts
    Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

/// POST ROUTE 
app.post("/api/workouts", (req, res) => {
  // Create and post new workout
  Workout.create({})
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      res.json(err);
    });
});

/// PUT ROUTE  //with id 
app.post("/api/workouts/:id", ({ body, params }, res) => {
    //use findIdAndUpdate() method
   Workout.findByIdAndUpdate(
       params.id, 
       {
           $push: {exercise: req.body},
           {new: true}
       })
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      res.json(err);
    });
   

    User.create(user)
        .then((dbUser) => {
        res.json(dbUser);
        })
        .catch((err) => {
        res.json(err);
        });
    });
}





