const mongoose = require("mongoose");
const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};
const ContactSchema = new mongoose.Schema({
  name: reqString,
  email: reqString,
  mobile: reqNumber,
  message: reqString,
});

const newContactQuery = new mongoose.model("contactQuery", ContactSchema);

module.exports = newContactQuery;
