const mongoose = require("mongoose");
const candidateSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email does Not exists"],
    unique: [true, "Email already exist"],
  },
  mobile: String,
  address: String,
  designation: String,
  employer: String,
  currentLocation: String,
  dob: String,
  resumeTitle: String,
  experience: String,
});
module.exports = mongoose.model("Candidate", candidateSchema);
