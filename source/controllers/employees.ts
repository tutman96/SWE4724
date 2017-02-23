import helpers = require('../helpers');

import { Employee } from '../model/Employee';

export = (app: helpers.app) => {
	app.get('/employees', helpers.wrap(async (req, res) => {
		if (req.token.accessLevel != "Administrator") return helpers.render(res, '404');

		var page = req.query['page'] || 1;
		var maxEntries = 20;

		var [employees, numEmployees] = await Promise.all([
			Employee.findAll({ limit: maxEntries, offset: maxEntries * (page - 1), attributes: ['id', 'username', 'firstName', 'lastName', 'accessLevel'] }),
			Employee.count()
		])

		return helpers.render(res, 'employees', {
			employees,
			page,
			totalPages: Math.ceil(numEmployees / maxEntries)
		});
	}))
}