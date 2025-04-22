const User=require('./user');
const ID=require('./id');
const department=require('./department');
const course=require('./course');
const studentCourse=require('./studentCourse');

User.hasOne(ID);
ID.belongsTo(User);

department.hasMany(User);
User.belongsTo(department);

User.belongsToMany(course,{through:studentCourse});
course.belongsToMany(User,{through:studentCourse});

module.exports={
  User,
  ID,
  department,
  course,
  studentCourse
}