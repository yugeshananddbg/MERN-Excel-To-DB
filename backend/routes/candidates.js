const express = require("express");
const { uploadToDatabase } = require("../controllers/candidate");
const router = express.Router();

router.route("/candidate/upload").post(uploadToDatabase);

module.exports = router;
