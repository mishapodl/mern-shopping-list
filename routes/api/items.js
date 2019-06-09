const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

//@Router Get All Items: /api/items/
router.get('/', (req, res) => {
	Item
		.find()
		.sort({ date: -1 })
		.then(items => res.json(items))
});

//@Router Post Item: /api/items/
router.post('/', (req, res) => {
	console.log(`req = ${req} -|- res = ${res}`);

	const newItem = new Item({
		name: req.body.name
	});

	newItem
		.save()
		.then(item => res.json(item));
});

//@Router Delete Item: /api/items/:id
router.delete('/:id', (req, res) => {
	Item
		.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => err.status(404).json({ success: false }));
});

module.exports = router;