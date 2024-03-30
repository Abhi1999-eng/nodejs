const fs = require('fs')

//Sync...
// fs.writeFileSync('./test.txt', 'Hello World!!!')
// var data = {
// 	'name': 'John',
// 	'age': '30',
// 	'city': 'New York',
// 	'country': 'USA',
// 	'phone': '123-456-7890',
// 	'zip': '10001'
// }

// data = Object.keys(data).map(key => `${key}: '${data[key]}'`).join(', ');

// Async...
// fs.writeFile('./test.txt', data, (err) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log('File has been created')
// 	}
// })

//Read File Sync
// const result = fs.readFileSync('./test.txt', 'utf8')

// //append
// fs.appendFile('./test.txt', 'dateCode: '
// 	+`${Date.now()}`, (err) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log('Data has been appended!')
// 	}
// })

//copy
// fs.copyFile('./test.txt', './test2.txt', (err) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log('File has been copied!')
// 	}
// })

//unlink
// fs.unlink('./test2.txt', (err) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log('File has been deleted!')
// 	}
// })

//stat
// const result = fs.stat('./test.txt', (err, stats) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(stats)
// 	}
// })

//rename
fs.rename('./test.txt', './working_on_files.txt', (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('File has been renamed!')
	}
})

//Read File Async
// const result = fs.readFile('./test.txt', 'utf8', (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(data)
// 	}
// })
// console.log(result)