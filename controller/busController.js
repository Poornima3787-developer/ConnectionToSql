const db=require('../utils/db-connection');
const Bus=require('../models/bus');

const addBus=async (req,res)=>{
  try{
    const { name, route, availableSeats } = req.body;
    const bus = await Bus.create({
      name,
      route,
      availableSeats
    });
    res.status(201).send(`Bus with name: ${name} is created!`)

  } catch(error){
     res.status(500).send('Unable to make an bus entry');
  }
 
};

const getAvailableBuses = async (req, res) => {
  try {
    const {seats} = parseInt(req.params.seats);
    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [require('sequelize').Op.gt]: seats
        }
      }
    });
    res.status(200).json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching buses');
  }
};


module.exports={
  addBus,
  getAvailableBuses
};