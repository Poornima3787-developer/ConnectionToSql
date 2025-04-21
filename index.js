const express = require('express');
const db=require('./utils/db-connection');
const studentRoutes=require('./routes/studentsRoutes');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
