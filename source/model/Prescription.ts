import Sequelize = require('sequelize');
import Database = require('../database');

export interface PrescriptionAttribute {
	appointmentId: number;
	title: string;
	prescriptionText: string;
	printTime?: Date;
}

export interface PrescriptionInstance extends Sequelize.Instance<PrescriptionAttribute>, PrescriptionAttribute { 
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface PrescriptionModel extends Sequelize.Model<PrescriptionInstance, PrescriptionAttribute> { }

export var Prescription = Database.define<PrescriptionInstance, PrescriptionAttribute>("Prescription", {
	appointmentId: { type: Sequelize.INTEGER },
	title: { type: Sequelize.TEXT },
	prescriptionText: { type: Sequelize.TEXT },
	printTime: { type: Sequelize.DATE }
})