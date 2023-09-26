const Users = require("../Models/newUserSchema");

// Sending all data

exports.getAllData=(req,res)=>{
  Users.find({ }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

}

// Sending trainers data

exports.getTrainersData = (req, res) => {
  Users.find({ userType: "trainer" }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// Sending normal users data 

exports.getUsersData = (req, res) => {
  Users.find({ userType: "normalUser" }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// Creating Users record

exports.createRecord = (req, res) => {
  const { name, email, password, userType, mobile } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Exist" });
    } else {
      const newUser = new Users({ name, email, password, userType, mobile });

      newUser.save((err) => {
        if (err) {
          res.send(err);
        } else res.send({ message: "Registration successfull" });
      });
    }
  });
};

// Checking for user if registered or not

exports.checkUser = (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password && user.userType === "normalUser") {
        res.send({ message: "login successful",userData:user });
      } else {
        res.send({ message: "Password Didn't Match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  });
};

exports.checkTrainer = (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password && user.userType === "trainer") {
        res.send({ message: "login successful" });
      } else {
        res.send({ message: "Password Didn't Match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  });
};

// Deleting record

exports.deleteRecord = function (req, res) {
  const { params } = req;
  console.log("params", params);
  Users.deleteOne({ _id: params.id }, (err, user) => {
    if (!err) {
      res.send("User Deleted Successfully");
    }
  });
};

// Updating record

exports.updateRecord = function (req, res) {
  const { params, body } = req;
  console.log("params", params);
  console.log("body", body);
  Users.updateOne({ _id: params.id }, body, (err, result) => {
    if (err) {
      res.send("There might be an error while updating record");
    } else {
      res.send("Updated Successfully");
    }
  });

};

// Updating name from userprofile page 

exports.updateName=function(req,res){
  const { params, body } = req;
  console.log(params);
  console.log(body);
  Users.updateOne({ _id: params.id }, body, (err, result) => {
    if (err) {
      res.send("There might be an error while updating record");
    } else {
      res.send("Updated Successfully");
    }
  });
}
