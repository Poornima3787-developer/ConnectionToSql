const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('testdb','root','Poornima@3787',{
  host:'localhost',
  dialect:'mysql'
});

(async ()=>{try{
 await sequelize.authenticate();
 console.log("Connection to the database has been created");
}catch(error){
  console.log(error);
}
})();

module.exports=sequelize;

















// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Poornima@3787',
//   database: 'testsql'
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Connection has been created");

//   const creationQuery=`create table IF NOT EXISTS Students(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100),
//   email VARCHAR(100) UNIQUE NOT NULL,
//   age INT
//   )`

//   connection.execute(creationQuery,(err)=>{
//     if(err){
//       console.log(err);
//       connection.end();
//       return;
//     }
//     console.log("Student table is created")
//   })
// })


// module.exports=connection;