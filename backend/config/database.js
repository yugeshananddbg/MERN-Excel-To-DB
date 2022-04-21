const mongoose = require("mongoose");
exports.connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Assignment')
    .then((con) => console.log(`Database connnected : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
