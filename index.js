const express = require('express');
const db=require('./utils/db-connection');

//models
const User=require('./models/user')
const Bus=require('./models/bus')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/',require('./routes/userRoutes'));
app.use('/',require('./routes/busRoutes'));

db.sync({force:false}).then(()=>{
  app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
}).catch((err)=>{
  console.log(err);
})

