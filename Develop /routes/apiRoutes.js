//requiring our workout model
const Workout = require("../models/workout.js");
const db = require("../models/workout.js");

module.exports = function (app) {
  /// GET ALL route
  app.get("/api/workouts", (req, res) => {
    // FInd all workouts
    db.Workout.find()
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
    db.Workout.create({ body })
      .then((datab) => {
        res.json(datab);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  /// PUT ROUTE  //with id
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    //use findIdAndUpdate() method
    db.Workout.findByIdAndUpdate(params.id, {
      $push: { exercise: req.body },
    })
      .then((info) => {
        res.json(info);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
