const db=require('../utils/db-connection');

const addUser=(req,res)=>{
  const {name,email,age}=req.body;
  const insertQuery='INSERT INTO students (name,email,age) VALUES(?,?,?)';
  db.execute(insertQuery,[name,email,age],(err)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return ;
    }
    console.log("value has been inserted");
    res.status(200).send(`Student with name ${name} successfully added`)
  })
}

const getUsers = (req, res) => {
  db.execute("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};

const getID = (req, res) => {
  const {id}=req.params;
  const query = "SELECT * FROM students WHERE id= ?";
  db.execute(query, [id], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};

const putID=(req,res)=>{
  const {id}=req.params;
  const {name,email,age}=req.body;
  const putQuery="UPDATE students SET name=?,email=?,age=? WHERE id=?";

  db.execute(putQuery,[name,email,age,id],(err,results)=>{
    if (err) {
      console.error("Update Error:", err.message);
      return res.status(500).send(err.message);
    }

    if (results.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }
    console.log(`Updated student with ID: ${id}`);
    res.status(200).json("Student updated");
    
  })
}

const deleteID=(req,res)=>{
const {id}=req.params;
const deleteQuery="DELETE FROM Students WHERE id=?";
db.execute(deleteQuery,[id],(err,results)=>{
  if(results.affectedRows===0){
    return res.status(404).send("Student not found");
  }
  console.log(`Deleted student with ID: ${id}`);
  res.json({ message: 'Student deleted' });
})
}
module.exports={
  addUser,
  getUsers,
  getID,
  putID,
  deleteID
}