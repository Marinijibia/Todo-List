const {Schema, model} = require("mongoose")

const todoSchema = new Schema({
  title: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    require: true,
    minlength: 20,
    maxlength: 1000,
  },
  TimeOfTheTask: {
    require: true,
    type: String,
  },
  dateOfTheTask: {
    require: true,
    type: String,
  },
},
{ timestamps: true }
);

const todoModel = model("Todo", todoSchema);

module.exports = todoModel;