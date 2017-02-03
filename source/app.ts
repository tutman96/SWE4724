import express = require('express');
import morgan = require('morgan');

import ejs = require('ejs');
import serveStatic = require('serve-static');
var minifyHTML = require('express-minify-html');

morgan.token('remote-addr', (req, res) => {
	var ffHeaderValue = req.headers['x-forwarded-for'];
	return ffHeaderValue || req.connection.remoteAddress;
});

var app = express();
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(minifyHTML({
	override: true,
	exception_url: false,
	htmlMinifier: {
		removeComments: true,
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		removeAttributeQuotes: true,
		removeEmptyAttributes: true,
		minifyJS: true
	}
}));

import database = require('./database');
import Patient = require('./model/Patient');
import Appointment = require('./model/Appointment');
import Employee = require('./model/Employee');
import ShiftSchedule = require('./model/ShiftSchedule');
var a = [Patient, Employee, Appointment, ShiftSchedule];

//setup
(async () => {
	await database.authenticate();
	await database.sync();


})().then(() => {
	app.listen(8080, () => {
		console.log("The app is now running on port 8080")
	});
}).catch((e) => {
	console.error(e);
})

app.get('/', async (req, res) => {
	res.render('login', {
		title: "Login",
		user: await Employee.Employee.findOne({ where: { id: 1 } })
	});
})

app.use(serveStatic('.', {
	maxAge: (process.env.NODE_ENV == 'production' ? 1000 * 60 * 60 * 24 : 0)
}))