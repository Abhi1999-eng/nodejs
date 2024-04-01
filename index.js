const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')
const port = 8000

mongoose.connect('mongodb://localhost:27017/nodejs', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Connected to MongoDB')
}).catch((err) => {
	console.log(err)
})

const userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: {
		type: String,
		unique: true
	},
	gender: String,
	job_title: String
})

const User = mongoose.model('User', userSchema)
const app = express()
app.use(express.json({ extended: false }))

// Routes
// Get all users
app.get('/api/users', async (req, res) => {
	try {
		const users = await User.find()
		res.json(users)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

// Get user by ID
app.get('/api/users/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			return res.status(404).json({ msg: 'User not found' })
		}
		res.json(user)
	} catch (err) {
		console.error(err.message)
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'User not found' })
		}
		res.status(500).send('Server Error')
	}
})

// Create a user
app.post('/api/users', async (req, res) => {
	try {
		const newUser = new User(req.body)
		await newUser.save()
		res.json(newUser)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

// Update a user
app.patch('/api/users/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			return res.status(404).json({ msg: 'User not found' })
		}
		user.set(req.body)
		await user.save()
		res.json(user)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

// Delete a user
app.delete('/api/users/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			return res.status(404).json({ msg: 'User not found' })
		}
		await user.remove()
		res.json({ msg: 'User removed' })
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(port, function (err) {
	if (err) console.log("Error in server setup:", err)
	console.log("Server listening on port", port)
})
