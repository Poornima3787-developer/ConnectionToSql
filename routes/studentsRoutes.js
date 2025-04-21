const express=require('express');
const studentController=require('../controller/studentController');
const router=express.Router();

router.post("/user",studentController.addUser);
router.get('/user', studentController.getUsers);

router.post("/buses",studentController.addBus);
router.get('/buses/available/:seats', studentController.getAvailableBuses);


module.exports=router;