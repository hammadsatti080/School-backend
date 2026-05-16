const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
name:{type:String,required:true},
subject:{type:String,required:true},
dob:{type:String,required:true},
gender:{type:String,required:true},
email:{type:String,required:true , unique: true},
address:{type:String,required:true},
phone:{type:String,required:true},
staffId:{type:String,required:true},
classAssigned:{type:String,required:true},
designation:{type:String,required:true},
joiningDate:{type:String,required:true},
qualification:{type:String,required:true},
  department: String,

});

module.exports = mongoose.model("Teacher", teacherSchema);