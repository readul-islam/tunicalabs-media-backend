const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name:  String, 
  age: Number, 
  school: String,
  class: String,
  divison: String,
  active:Boolean,
  invoice:Boolean
 });

 module.exports= mongoose.model('course',StudentSchema);
 