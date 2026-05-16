const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");

router.get("/", async(req,res)=>{
const data = await Teacher.find();
res.json(data);
});

router.post("/", async(req,res)=>{
const teacher = new Teacher(req.body);
await teacher.save();
res.json(teacher);
});

router.put("/:id", async(req,res)=>{
await Teacher.findByIdAndUpdate(req.params.id, req.body);
res.json({message:"updated"});
});

router.delete("/:id", async(req,res)=>{
await Teacher.findByIdAndDelete(req.params.id);
res.json({message:"deleted"});
});

module.exports = router;