const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name:  String, 
  age: Number, 
  school: String,
  class: String,
  divison: String,
 });

 module.exports= mongoose.model('course',StudentSchema);
 