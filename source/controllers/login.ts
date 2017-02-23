import helpers = require('../helpers');
import jwt = require('jsonwebtoken');

import fs = require('fs');
var jwtSecret = fs.readFileSync('./secret.txt').toString();

import { Employee } from '../model/Employee';

import crypto = require('crypto');
function hash(username: string, password: string) {
	return crypto.createHash('sha256').update(username.toLowerCase() + password).digest('base64');
}

export = (app: helpers.app) => {
	app.get('/login', helpers.wrap(async (req, res) => {
		return helpers.render(res, 'login');
	}))

	app.post("/login", helpers.wrap(async (req, res) => {
		var username = req.body.username;
		var password = req.body.password;

		var e = await Employee.findOne({ where: { username: username, passHash: hash(username, password) } });
		if (!e) {
			res.status(401);
			return "Invalid username or password"
		}

		var token: typeof req.token = {
			id: e.id,
			username: e.username,
			accessLevel: e.accessLevel,
		}

		res.cookie('token', jwt.sign(token, jwtSecret, { expiresIn: '7d' }), {
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
			httpOnly: true
		})
	}))
}