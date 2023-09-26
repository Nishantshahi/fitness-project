const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true,
  };
  
  const reqNumber = {
    type: Number,
    required: true,
  };
  
const newProfileSchema = new mongoose.Schema({
  name: reqString,
  email: reqString,
  mobile: reqNumber,
  gender:reqString,
  age:reqNumber,
  weight:reqNumber,
  height:reqNumber
});

const newProfile=new mongoose.model("userProfiles",newProfileSchema);

module.exports=newProfile;