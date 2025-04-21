const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Poornima@3787',
  database: 'testsql'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connection has been created");
  const creationQuery=()=>{
  const userQuery=`create table IF NOT EXISTS Students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
  )`

  connection.execute(userQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("Student table is created")
  })
}
creationQuery();
})

module.exports=connection;