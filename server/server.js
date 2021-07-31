//! Module Imports
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');

//* App
const app = express();

//* MongoDB Connect
require('./db');

//* CORS
app.use(cors());

//* Express
app.use(express.json());

//? Port
const port = process.env.PORT;

//! Routes
const { router: ItemRoutes } = require('./routes/ItemRoutes');
app.use('/api/v1', ItemRoutes);

app.listen(port, () => {
	console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
});
