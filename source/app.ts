require('source-map-support').install()

import express = require('express');
import morgan = require('morgan');

import ejs = require('ejs');
import serveStatic = require('serve-static');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
var minifyHTML = require('express-minify-html');

import fs = require('fs');
import crypto = require('crypto');
if (!fs.existsSync('./secret.txt')) {
    var generateSecret = () => {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charsLength = chars.length;
        var randomBytes = crypto.randomBytes(40);
        var result = new Array(40);

        var cursor = 0;
        for (var i = 0; i < 40; i++) {
            cursor += randomBytes[i];
            result[i] = chars[cursor % charsLength];
        }

        return result.join('');
    }

    fs.writeFileSync('./secret.txt', generateSecret());
}
var jwtSecret = fs.readFileSync('./secret.txt').toString();

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
app.use(bodyParser.json());
app.use(cookieParser());

app.use(serveStatic('.', {
    maxAge: (process.env.NODE_ENV == 'production' ? 1000 * 60 * 60 * 24 : 0)
}))

import jwt = require('jsonwebtoken');
import helpers = require('./helpers');
app.use((req: helpers.Request, res, next) => {
    var p = req.path.replace(/\//g,"");
    var title = (p && p.toLowerCase()) || "AMOMS";
	title = title[0].toUpperCase() + title.substr(1);
    res.locals = {
        title: title,
        path: req.path
    }
    
    if (req.path == "/login") return next();

    try {
        var token = req.cookies && req.cookies['token'];
        if (!token) throw "No token"; 
        var decodedToken = jwt.verify(token, jwtSecret)
        req.token = decodedToken;
        next();
    }
    catch (e) {
        console.error(e);
        return res.status(302).location('/login').end();
    }
})


import login = require('./controllers/login');
login(app);

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

app.use((req, res, next) => {
	res.status(404);
	res.render("404");
})