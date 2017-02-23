import helpers = require('../helpers');

import { Employee } from '../model/Employee';
import { hash } from './login';

export = (app: helpers.app) => {
	/** Employees */
	app.get('/employees', helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '401');

		var page = +req.query['page'] || 1;
		var maxEntries = 20;

		var [employees, numEmployees] = await Promise.all([
			Employee.findAll({ limit: maxEntries, offset: maxEntries * (page - 1), attributes: ['id', 'username', 'firstName', 'lastName', 'accessLevel', 'disabled'] }),
			Employee.count()
		])

		return helpers.render(res, 'employees', {
			employees,
			page,
			totalPages: Math.ceil(numEmployees / maxEntries)
		});
	}))

	/** Employee */
	app.get("/employee/:id", helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '401');

		var employeeId: number | "new" = req.params.id;
		if (employeeId == "new") {
			return helpers.render(res, 'employee', {
				title: "New Employee",
				isNew: true,
				employee: {}
			})
		}
		else {
			var employee = await Employee.findOne({ where: { id: +employeeId }, attributes: ['id', 'username', 'firstName', 'lastName', 'accessLevel', 'disabled'] });
			return helpers.render(res, 'employee', {
				title: employee.firstName + " " + employee.lastName,
				isNew: false,
				employee: employee
			})
		}
	}))

	app.post("/employee/:id", helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '401');

		var passHash;
		if (req.body.password) {
			passHash = hash(req.body.username, req.body.password)
		}

		var employeeId: number | "new" = req.params.id;
		if (employeeId == "new") {
			await Employee.insertOrUpdate({
				username: req.body.username,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				accessLevel: req.body.accessLevel,
				passHash: passHash
			})
		}
		else {
			await Employee.update({
				username: req.body.username,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				accessLevel: req.body.accessLevel,
				passHash: passHash
			}, { where: { id: +employeeId } })
		}
	}))

	app.post("/employee/:id/disable", helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '401');

		await Employee.update({
			disabled: true
		}, { where: { id: +req.params.id } })
	}))
	
	app.post("/employee/:id/enable", helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '401');

		await Employee.update({
			disabled: false
		}, { where: { id: +req.params.id } })
	}))
}