const express=require('express');
const studentController=require('../controller/studentController');
const router=express.Router();

router.post("/students",studentController.addUser);
router.get('/students', studentController.getUsers);
router.get('/students/:id',studentController.getID);
router.put('/students/:id',studentController.putID);
router.delete('/students/:id',studentController.deleteID);

module.exports=router;