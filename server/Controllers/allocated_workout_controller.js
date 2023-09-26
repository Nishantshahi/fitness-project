const Allocate = require("../Models/allocatedWorkoutSchema");

// Creating record

exports.createRecord = (req, res) => {
  const { userEmail, workoutName } = req.body;
  console.log(req.body);
  Allocate.findOne({ userEmail: req.body.userEmail }, (err, user) => {
    if (user) {
      Allocate.updateOne({ userEmail: userEmail }, req.body, (err, result) => {
        if (err) {
          res.send("There might be an error while updating record");
        } else {
          res.send({message:"Updated Successfully",data:result});
        }
      });
      // res.send({ message: "Record Already Exist" });
    } else {
      const newUser = new Allocate({ userEmail,workoutName });

      newUser.save((err,result) => {
        if (err) {
          res.send(err);
        } else res.send({ message: "Workout alloted successfully",data:result });
      });
    }
  });
};

// Sending record

exports.sendRecord=(req,res)=>{
  Allocate.find({ userEmail: req.query.email }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

}

// Sending all records

exports.sendAllRecord=(req,res)=>{
  Allocate.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

// Deleting records

exports.deleteRecord = (req, res)=> {
  const { params } = req;
  console.log("params", params);
  Allocate.deleteOne({ _id: params.id }, (err, user) => {
    if (!err) {
      res.send("Record Deleted Successfully");
    }
  });
};

// Updating plan completion status

exports.UpdateStatus=(req,res)=>{
  const {params,body}=req;
  console.log("params", params);
  console.log("body", body);
  Allocate.updateOne({ _id: params.id }, body, (err, result) => {
    if (err) {
      res.send("There might be an error while updating record");
    } else {
      res.send("Updated Successfully");
    }
  });

}