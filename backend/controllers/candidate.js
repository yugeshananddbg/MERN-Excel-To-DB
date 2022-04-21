const Candidate = require("../models/Candidate");

exports.uploadToDatabase = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      address,
      designation,
      employer,
      currentLocation,
      dob,
      resumeTitle,
      experience,
    } = req.body;
    let candidate = await Candidate.findOne({ email });
    if (candidate) {
      return res.status(400).json({
        success: false,
        message: "Candidate data already exist in database",
      });
    }

    candidate = await Candidate.create({
      name,
      email,
      mobile,
      address,
      designation,
      employer,
      currentLocation,
      dob,
      resumeTitle,
      experience,
    });

    res.status(200).json({
      success: true,
      message: "Uploaded to databse sucessfully",
      candidate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
