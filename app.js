const express = require('express');
const db=require('./utils/db-connection');
const userRoutes=require('./routes/userRoutes');
const courseRoutes=require('./routes/courseRoute');

//models
require('./models')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/students',userRoutes);
app.use('/course',courseRoutes);

db.sync({force:false}).then(()=>{
  app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
}).catch((err)=>{
  console.log(err);
})

