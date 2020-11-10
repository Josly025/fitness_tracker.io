const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExersiseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Include type of excerise",
      },
      name: {
        type: String,
        trim: true,
        required: "Include exercise name",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
