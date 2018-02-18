const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body Parser Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
//app.use(express.static(path.join(__dirname, 'public')));


var person = [
    {
	name: 'Jeff',
	age: 30
	},
	{
	name: 'Sara',
	age: 22
	}
]

//var myLogger = 

//app.use(myLogger)


app.get('/', function (req, res, next) {
	console.log('Logged')
    console.log('Time:', Date.now())
    next()
    }, function (req, res, next) {
    res.send('Hello World')
    })

app.listen(3000, function() {
	console.log('Server started on port 3000')
})
