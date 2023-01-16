const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "should not be empty"],
    trim: true,
    maxlength: [20, "should be less than 20 characters"],
  },
  complete: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Tasks = model("Tasks", TaskSchema);

module.exports = Tasks;
