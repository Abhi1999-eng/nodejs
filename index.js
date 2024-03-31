const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
	res.send('hello world')
})
app.get('/about', (req, res) => {
	res.send('this is about page')
})


app.listen(port, () => {
	console.log(`Server started on port` + 3000)
})