const Car = require('../models/Car');

const getCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'An error occurred while fetching cars' });
    }
};

const addCar = async (req, res) => {
    const { brand, model, year, price_per_day } = req.body;
    try {
        const newCar = await Car.create({ brand, model, year, price_per_day });
        res.status(201).json(newCar);
    } catch (error) {
        console.error('Error adding car:', error);
        res.status(500).json({ error: 'An error occurred while adding the car' });
    }
};

module.exports = {
    getCars,
    addCar
};
