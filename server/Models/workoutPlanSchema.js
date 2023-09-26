const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

const exerciseSchema = new mongoose.Schema(
  {
    day: reqString,
    exerciseName: reqString,
    description:reqString,
    duration: reqNumber
  },
  {
    timestamps: true,
  }
);

const newPlanSchema = new mongoose.Schema({
  workoutName: reqString,
  calories:reqNumber,
  exercises: [exerciseSchema],
});

const newPlan = new mongoose.model("plans", newPlanSchema);

module.exports = newPlan;
