const mongoose = require("mongoose");

const newWorkoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type:Number,
    required: true,
  },
  repeatDays: {
    type: String,
    required: true,
  },
  workoutInfo: {
    type: String,
    required: true,
  },
});

const newWorkout = new mongoose.model("workouts", newWorkoutSchema);

module.exports = newWorkout;
