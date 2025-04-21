const db=require('../utils/db-connection');

const addUser=(req,res)=>{
  const {name,email}=req.body;
  const insertQuery='INSERT INTO students (name,email) VALUES(?,?)';
  db.execute(insertQuery,[name,email],(err)=>{
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
  db.execute("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};

const addBus = (req, res) => {
  const { bus_numbers, total_seats, available_seats } = req.body;
  const query = "INSERT INTO buses (bus_number, total_seats, available_seats) VALUES (?, ?, ?)";
  db.execute(query, [bus_numbers, total_seats, available_seats], (err) => {
    if(err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return ;
    }
    console.log("buses details has been inserted");
  });
};

const getAvailableBuses = (req, res) => {
  const minSeats = parseInt(req.params.seats);
  const query = "SELECT * FROM buses WHERE available_seats > ?";
  db.execute(query, [minSeats], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};

module.exports={
  addUser,
  getUsers,
  addBus,
  getAvailableBuses
}