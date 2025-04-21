const express=require('express');
const studentController=require('../controller/studentController');
const router=express.Router();

router.post("/users",studentController.addEntries);

router.put('/update/:id',studentController.updateEntry);



module.exports=router;