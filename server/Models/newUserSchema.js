const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  userType:{
    type:String,
    required:true
  }
});

const newUser=new mongoose.model("users",newUserSchema);

module.exports=newUser;