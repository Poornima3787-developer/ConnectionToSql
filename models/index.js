const User=require('./user');
const ID=require('./id');
const department=require('./department');

User.hasOne(ID);
ID.belongsTo(User);

department.hasMany(User);
User.belongsTo(department);

module.exports={
  User,
  ID,
  department
}