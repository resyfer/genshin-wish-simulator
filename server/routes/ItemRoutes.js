const express = require('express');
const router = express.Router();

//* Controllers
const { ItemGet, allItemsGet } = require('../controllers/ItemController');

router.get('/', (req, res) => {
	res.send('Hello World');
});

router.get('/all', allItemsGet);

router.get('/one', (req, res) => ItemGet(req, res, 1));
router.get('/ten', (req, res) => ItemGet(req, res, 10));

module.exports = {
	router,
};
