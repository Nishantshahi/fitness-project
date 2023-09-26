const Contact = require("../Models/ContactDataModel");

// Send Record

exports.getContactDetail = (req, res) => {
  Contact.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// Create Record

exports.recordContactDetail = (req, res) => {
  const { name, email, message, mobile } = req.body;
  const newContact = new Contact({ name, email, message, mobile });
  newContact.save((err) => {
    if (err) {
      res.send(err);
    } else res.send({ message: "Stored successfully" });
  });
};

// Delete Detail

exports.deleteContactDetail=(req,res)=>{
    const { params } = req;
  console.log("params", params);
  Contact.deleteOne({ _id: params.id }, (err, user) => {
    if (!err) {
      res.send("Record Deleted Successfully");
    }
  });
}