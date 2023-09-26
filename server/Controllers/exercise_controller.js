const Workout = require("../Models/workoutSchema");

exports.getWorkouts = (req, res) => {
    Workout.find({},( function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }));
  };

  exports.createWorkout = (req, res) => {
    console.log(req.body)
    const {workoutName,description,duration,category,workoutInfo,repeatDays}=req.body;
    Workout.findOne({workoutName:workoutName},(err,user)=>{
      if(user){
        res.send({message:"Workout Already Exist"})
      }else{
        const newWorkout= new Workout(
          {workoutName,description,duration,category,workoutInfo,repeatDays}
        )
      
        newWorkout.save(err=>{
          if(err){
            res.send(err)
          }
          else(
            res.send({message:"Stored successfully"})
          )
        })
      }
    })
    
  };