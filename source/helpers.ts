import express = require('express');
import Employee = require('./model/Employee');

export interface Request extends express.Request {
	token: {
		id: number,
		username: string,
		accessLevel: Employee.AccessLevel,
		exp?: number
	}
}

export type Response = express.Response;
export type app = express.Application;

export function wrap(handler: (req: Request, res: Response, next?: express.NextFunction) => Promise<any>) {
	"use strict";
	return function (req: Request, res: Response, next: express.NextFunction) {
		try {
			var p = handler.apply(undefined, [req, res]);
		} catch (e) {
			next(e);
		}
		if (p.catch && p.then) {
			p.then((r) => {
				if (!res.finished) {
					if (r == null || r == undefined) {
						return res.status(204).end();
					}
					else if (typeof r == "object") {
						res.json(r);
						return res.end();
					}
					else {
						res.write(r);
						return res.end();
					}
				}
			})
			return p.catch(next);
		}
	};
}

export function render(res: Response, template: string, data?: any) {
	return new Promise<string>((resolve, reject) => {
		res.render(template, data, (err, html) => {
			if (err) reject(err);
			else resolve(html);
		})
	})
}