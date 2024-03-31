const express = require('express')
const port = 8000

const app = express()

//Routes
app.get('/', function (req, res) {
	res.send("Hello World")
})

app.listen(port, function (err) {
	if (err) console.log("Error in server setup:", err)
	console.log("Server listening on port", port)
})