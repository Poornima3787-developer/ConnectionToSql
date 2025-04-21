const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Poornima@3787',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connection has been created");
  const creationQuery=()=>{
  const userQuery=`create table IF NOT EXISTS users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
  )`

  const busesQuery=`create table IF NOT EXISTS buses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  bus_numbers VARCHAR(20),
  total_seats INT,
  available_seats INT
  )`

  connection.execute(userQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("User table is created")
  })

  connection.execute(busesQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("buses table is created")
  })
};
creationQuery();

})

module.exports=connection;