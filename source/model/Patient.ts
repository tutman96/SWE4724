import Sequelize = require('sequelize');
import Database = require('../database');

export interface MaritalStatus {
	SINGLE,
	MARRIED
}

export interface PatientAttribute {
	firstName: string;
	lastName: string;
	middleInitial?: string;
	dateOfBirth?: Date;
	gender?: string;
	fileKey?: string;
	maritalStatus?: MaritalStatus;
	phoneNumber: string;
	occupation?: string;
	emailAddress: string;
	mailingAddress?: string;
	children?: number;
	medicalHistory?: string;
}

export interface PatientInstance extends Sequelize.Instance<PatientAttribute>, PatientAttribute {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface PatienttModel extends Sequelize.Model<PatientInstance, PatientAttribute> { }

export var Patient = Database.define<PatientInstance, PatientAttribute>("Patient", {
	firstName: { type: Sequelize.STRING(256) },
	lastName: { type: Sequelize.STRING(256) },
	middleInitial: { type: Sequelize.CHAR(1) },
	dateOfBirth: { type: Sequelize.DATE },
	gender: { type: Sequelize.STRING(256) },
	fileKey: { type: Sequelize.STRING(256) },
	maritalStatus: { type: Sequelize.ENUM("SINGLE", "MARRIED") },
	phoneNumber: {
		type: Sequelize.STRING(256),
		validate: {
			is: /^\d{3}-\d{3}-\d{4}$/
		},
		allowNull: false
	},
	occupation: { type: Sequelize.STRING(256) },
	emailAddress: { type: Sequelize.STRING(256) },
	mailingAddress: { type: Sequelize.STRING(256) },
	children: { type: Sequelize.INTEGER },
	medicalHistory: { type: Sequelize.TEXT }
})