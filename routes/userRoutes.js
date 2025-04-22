const express=require('express');
const userController=require('../controller/userController');
const router=express.Router();

router.post("/users",userController.addEntries);

router.get("/users", userController.getAllUsers);

router.put('/update/:id',userController.updateEntry);
router.post('/addingStudentWithCard',userController.addingValues)

router.delete('/delete/:id', userController.deleteEntry);

module.exports=router;