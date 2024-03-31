const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {

	const myUrl = url.parse(req.url, true)
	console.log(myUrl.query.name);
	// Log the incoming request
	const log = `New request received on : ${new Date()} at ${myUrl.pathname}\n`

	// Append the log to the file
	fs.appendFile('log.txt', log, err => {
		if (err) {
			console.error('Error writing to log file:', err)
		} else {
			switch (myUrl.pathname) {
				case '/':
					res.end('This is home page')
					break;

				case '/about':
					res.end('This is about page')
					break;

				default:
					res.end(`This is ${myUrl.pathname} page`)
					break;
			}
		}
	})

})

myServer.listen(3000, () => {
	console.log('Server is running on port 3000.....')
})
