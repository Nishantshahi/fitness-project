const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

const allocateWorkoutSchema = new mongoose.Schema({
  userEmail: reqString,
  workoutName: reqString,
  status: { type: String, default: "incomplete" },
});

const newWorkoutAllocated = new mongoose.model(
  "allocatedWorkouts",
  allocateWorkoutSchema
);

module.exports = newWorkoutAllocated;
