const Plans = require("../Models/workoutPlanSchema");

// Sending all plans

exports.getPlan=(req,res)=>{
  Plans.find({},( function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }));
}

// Sending Particular plans

exports.getParticularPlan=(req,res)=>{
  console.log(req.query.workoutName);
  Plans.find({workoutName:req.query.workoutName},( function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }));
}

// Creating particular Plan


exports.createPlan = (req, res) => {
  console.log(req.body);
  const {
    calories,
    workoutName,
    mondayDescription,
    tuesdayDescription,
    wednesdayDescription,
    thursdayDescription,
    fridayDescription,
    saturdayDescription,
    sundayDescription,
    mondayExerciseName,
    tuesdayExerciseName,
    wednesdayExerciseName,
    thursdayExerciseName,
    fridayExerciseName,
    saturdayExerciseName,
    sundayExerciseName,
    mondayDuraion,
    tuesdayDuraion,
    wednesdayDuraion,
    thursdayDuraion,
    fridayDuraion,
    saturdayDuraion,
    sundayDuraion,
  } = req.body;
  
  Plans.findOne({ workoutName: workoutName }, (err, plan) => {
    if (plan) {
      res.send({ message: "Workout Already Exist" });
    } else {
      const newWorkout = new Plans({
        workoutName,
        calories,
        exercises: [
          {
            day: "monday",
            exerciseName: mondayExerciseName,
            description: mondayDescription,
            duration: mondayDuraion,
          },
          {
            day: "tuesday",
            exerciseName: tuesdayExerciseName,
            description: tuesdayDescription,
            duration: tuesdayDuraion,
          },
          {
            day: "wednesday",
            exerciseName: wednesdayExerciseName,
            description: wednesdayDescription,
            duration: wednesdayDuraion,
          },
          {
            day: "thursday",
            exerciseName: thursdayExerciseName,
            description: thursdayDescription,
            duration: thursdayDuraion,
          },
          {
            day: "friday",
            exerciseName: fridayExerciseName,
            description: fridayDescription,
            duration: fridayDuraion,
          },
          {
            day: "saturday",
            exerciseName: saturdayExerciseName,
            description: saturdayDescription,
            duration: saturdayDuraion,
          },
          {
            day: "sunday",
            exerciseName: sundayExerciseName,
            description: sundayDescription,
            duration: sundayDuraion,
          },
        ],
      });

      newWorkout.save((err) => {
        if (err) {
          res.send(err);
        } else res.send({ message: "Stored successfully" });
      });
    }
  });
};

// Deleting Plans

exports.deletePlan=(req,res)=>{
  const { params } = req;
  console.log("params", params);
  Plans.deleteOne({ _id: params.id }, (err, user) => {
    if (!err) {
      res.send("User Deleted Successfully");
    }
  });
}

// Updating plans

exports.updatePlan=(req,res)=>{
  const { params, body } = req;
  console.log("params", params);
  console.log("body", body);
  Plans.updateOne({ _id: params.id }, body, (err, result) => {
    if (err) {
      res.send("There might be an error while updating record");
    } else {
      res.send("Updated Successfully");
    }
  });
}