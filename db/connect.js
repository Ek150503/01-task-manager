const mongoose = require("mongoose");

const conectionString =
  "mongodb+srv://Ek150503:Ek150503@cluster0.9zrqfwy.mongodb.net/taskmanager?retryWrites=true&w=majority";

const connectDb = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {});
};

module.exports = connectDb;
