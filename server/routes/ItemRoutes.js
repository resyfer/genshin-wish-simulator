const express = require('express');
const router = express.Router();

//* Controllers
const { allItemsGet } = require('../controllers/ItemController');

router.get('/', (req, res) => {
	res.send('Hello World');
});

router.get('/all', allItemsGet);

module.exports = {
	router,
};
