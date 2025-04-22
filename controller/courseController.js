const course = require('../models/course');
const Course=require('../models/course');
const User=require('../models/user')

const addCourse=async (req,res)=>{
  try {
    const {name}=req.body;
    const course=await Course.create({'name':name});
    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({'error':error.message})
  }
}
const addUserToCourse=async (req,res)=>{

try {
  const {userId}=req.body;
  const user=await User.findByPk(userId);
  const course=await Course.findAll({
    where:{
      id:courseId
    }
  })
  await user.addCourse(course);
  const updatedUser=await User.findByPk(userId,{include:course});
  res.status(200).json(updatedUser);
} catch (error) {
  
}
}
module.exports={
  addCourse,
  addUserToCourse
}