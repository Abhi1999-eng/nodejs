const http = require('http')
const fs = require('fs')


const myServer = http.createServer((req, res) => {
	const url = req.url
	// Log the incoming request
	const log = `New request received on : ${new Date()} at ${url}\n`

	// Append the log to the file
	fs.appendFile('log.txt', log, err => {
		if (err) {
			console.error('Error writing to log file:', err)
		} else {
			switch (url) {
				case '/':
					res.end('This is home page')
					break;

				case '/about':
					res.end('This is about page')
					break;

				default:
					res.end(`This is ${url} page`)
					break;
			}
		}
	})

})

myServer.listen(3000, () => {
	console.log('Server is running on port 3000.....')
})
