const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const { log } = require('console')
const port = 8000

const app = express()
app.use(express.json({ extended: false }))

//Routes
app.get('/api/users', function (req, res) {
	return res.json(users)
})

app.get('/users', function (req, res) {
	const html = `<ul>${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}</ul>`
	res.send(html)
})

app.get('/api/users/:id', function (req, res) {
	var id = req.params.id
	id = parseInt(id);
	const user = users.find(user => user.id === id);
	return res.json(user)
})

app.post('/api/users', function (req, res) {
	var body = req.body
	users.push({
		id: users.length + 1,
		...body
	})
	fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
	return res.json(body)

});

app.patch('/api/users/:id', function (req, res) {
	var id = req.params.id
	id = parseInt(id);
	const user = users.find(user => user.id === id);
	user.first_name = req.body.first_name ? req.body.first_name : user.first_name
	user.last_name = req.body.last_name ? req.body.last_name : user.last_name
	user.email = req.body.email ? req.body.email : user.email
	user.gender = req.body.gender ? req.body.gender : user.gender
	user.job_title = req.body.job_title ? req.body.job_title : user.job_title;
	fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
	return res.json(user)
})

app.delete('/api/users/:id', function (req, res) {
	var id = req.params.id
	id = parseInt(id);
	const user = users.find(user => user.id === id);
	const index = users.indexOf(user);
	users.splice(index, 1);
	fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
	return res.json(user)
})

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(port, function (err) {
	if (err) console.log("Error in server setup:", err)
	console.log("Server listening on port", port)
})