import Sequelize = require('sequelize');
import Database = require('../database');

export enum AccessLevel {
	STANDARD
}

export interface EmployeeAttribute {
	username: string;
	firstName: string;
	lastName: string;
	passHash: string;
	accessLevel: AccessLevel;
}

export interface EmployeeInstance extends Sequelize.Instance<EmployeeAttribute>, EmployeeAttribute {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface EmployeeModel extends Sequelize.Model<EmployeeInstance, EmployeeAttribute> { }

export var Employee = Database.define<EmployeeInstance, EmployeeAttribute>("Employee", {
	username: { type: Sequelize.STRING },
	firstName: { type: Sequelize.STRING },
	lastName: { type: Sequelize.STRING },
	passHash: { type: Sequelize.STRING },
	accessLevel: { type: Sequelize.ENUM("STANDARD") }
})