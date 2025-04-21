const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('testdb','root','Poornima@3787',{
  host:'localhost',
  dialect:'mysql',
  logging: false
});

(async ()=>{
  try{
 await sequelize.authenticate();
 console.log("Connection to the database has been created");
}catch(error){
  console.log(error);
}
})();

module.exports=sequelize;

