import Sequelize = require('sequelize');
import Database = require('../database');

export type AccessLevel = 'Receptionist' | 'Practitioner' | 'Administrator'

export interface EmployeeAttribute {
	username?: string;
	firstName?: string;
	lastName?: string;
	passHash?: string;
	accessLevel?: AccessLevel;
	disabled?: boolean;
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
	accessLevel: { type: Sequelize.STRING },
	disabled: { type: Sequelize.BOOLEAN }
})