const express=require('express');
const courseController=require('../controller/courseController');
const router=express.Router();

router.post('/addcourses',courseController.addCourse);
router.get('/addStudent',courseController.addUserToCourse);

module.exports=router;