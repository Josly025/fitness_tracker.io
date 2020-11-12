//requiring our workout model
const app = require("express");
// const db = require("../models");
const Workout = require("../models/workout.js");
/////
module.exports = function (app) {
  /// GET ALL route
  app.get("/api/workouts", (req, res) => {
    // FInd all workouts
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  /// POST ROUTE
  app.post("/api/workouts", ({ body }, res) => {
    // Create and post new workout
    Workout.create(body)
      .then((datab) => {
        res.json(datab);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  /// PUT ROUTE  //with id
  app.put("/api/workouts/:id", ({ req, params }, res) => {
    //use findIdAndUpdate() method
    Workout.findByIdAndUpdate(
      { _id: params.id },
      {
        $push: { exercises: req.body },
        // {new: true}
      }
    )
      .then((info) => {
        res.json(info);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
