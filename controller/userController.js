const db=require('../utils/db-connection');
const User=require('../models/user');
const ID=require('../models/id')
const addEntries=async (req,res)=>{
  try{
    const {name,email,age}=req.body;
    const user = await User.create({
      name:name,
      email:email,
      age:age
    });
    res.status(201).send(`User with name: ${name} is created!`)

  } catch(error){
     res.status(500).send('Unable to make an entry');
  }
 
};

const addingValues =async (req,res)=>{
  try {
    const user= await User.create(req.body.user);
    const id=ID.create({
      ...req.body.ID,
      id:id.id
    })
    res.status(201).json({user,id})
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to fetch users');
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name,email,age } = req.body;
    const [updated]=await User.update({name,email,age},{
      where:{id}
    });
    if(updated===0){
      return res.status(404).send("User not found or no changes made.");
    }
    res.send(`User with ID ${id} updated successfully.`);
  }catch(error){
    console.error( error.message);
    res.status(500).send(`Unable to update entry: ${error.message}`);
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).send("User not found.");
    }
    res.send(`User with ID ${id} deleted.`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to delete user");
  }
};


module.exports={
  addEntries,
  getAllUsers,
  updateEntry,
  deleteEntry,
  addingValues
}