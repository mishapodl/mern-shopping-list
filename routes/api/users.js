const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Item Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Private
router.post('/', (req, res) => {
const { name, email, password } = req.body

	if(!name || !email || !password ) {
		return res.status(400).json({ msg: 'Invalid form. Try fill out again'})
	}

	User.findOne({ email })
		.then(user => {
			if(user) return res.status(400).json({ msg: 'User exist'})

			const newUser = new User({
				name,
				email,
				password
			})

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err
					newUser.password = hash
					newUser.save()
						.then(user => {
							res.json({
								user: {
									id: user.id,
									name: user.name,
									email: user.email
								}
							})
						})
				})
			})
	})
});

module.exports = router;