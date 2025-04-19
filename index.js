const express = require('express');
const mysql = require('mysql2');
const app = express();

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

  console.log("Connection to MySQL has been established");

  const createTable = () => {
    const userTable = `
      CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
      )`;

    const busesTable = `
      CREATE TABLE IF NOT EXISTS Buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(50),
        totalSeats INT,
        availableSeats INT
      )`;

    const bookingsTable = `
      CREATE TABLE IF NOT EXISTS Bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
      )`;

    const paymentsTable = `
      CREATE TABLE IF NOT EXISTS Payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid DECIMAL(10,2),
        paymentStatus VARCHAR(10)
      )`;

    connection.execute(userTable, (err) => {
      if (err) return console.log(err);
      console.log("Users table created");
    });

    connection.execute(busesTable, (err) => {
      if (err) return console.log(err);
      console.log("Buses table created");
    });

    connection.execute(bookingsTable, (err) => {
      if (err) return console.log(err);
      console.log("Bookings table created");
    });

    connection.execute(paymentsTable, (err) => {
      if (err) return console.log(err);
      console.log("Payments table created");
    });
  };

  createTable();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log("🚀 Server is running at http://localhost:3000");
});
