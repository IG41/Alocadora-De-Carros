const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
