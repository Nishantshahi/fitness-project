const Users = require("../Models/userProfileSchema");

// Sending Profile to user 

exports.getProfiles = (req, res) => {
  Users.find({ email: req.query.email }, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.send("error");
    }
  });
};

// Create profile data if not not available

exports.createProfile = function (req, res) {
  const { name, email, mobile, gender, height, weight, age } = req.body;
  Users.findOne({ email: email }, function (err, profile) {
    if (profile) {
      res.send({
        data: profile,
        message: "Profile already created ,Try updating the profile ",
      });
    } else {
      const newUser = new Users({
        name,
        email,
        mobile,
        gender,
        height,
        weight,
        age,
      });
      newUser.save((err, result) => {
        if (err) {
          res.send(err);
        } else
          res.send({
            message: "Profile data Stored successfully",
            data: result,
          });
      });
    }
  });
};

// Updating Profile

exports.updateProfile = function (req, res) {
  const { params, body } = req;
  console.log(params.id);
  console.log(body);

  Users.updateOne({ _id: params.id }, body, (err, result) => {
    if (err) {
      res.send({ message: "There might be an error while updating record" });
    } else {
      res.send({ message: "Profile Updated Successfully", data: result });

    }
  });
};
