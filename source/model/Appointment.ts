import Sequelize = require('sequelize');
import Database = require('../database');

export interface AppointmentAttribute {
	employeeId: number;
	patientId: number;
	scheduledStart: Date;
	scheduledEnd: Date;
	checkinTime?: Date;
	checkoutTime?: Date;
	appointmentStart?: Date;
	appointmentEnd?: Date;
	notes?: string;
}

export interface AppointmentInstance extends Sequelize.Instance<AppointmentAttribute>, AppointmentAttribute { 
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface AppointmentModel extends Sequelize.Model<AppointmentInstance, AppointmentAttribute> { }

export var Appointment = Database.define<AppointmentInstance, AppointmentAttribute>("Appointment", {
	employeeId: { type: Sequelize.INTEGER },
	patientId: { type: Sequelize.INTEGER },
	scheduledStart: { type: Sequelize.DATE },
	scheduledEnd: { type: Sequelize.DATE },
	checkinTime: { type: Sequelize.DATE },
	checkoutTime: { type: Sequelize.DATE },
	appointmentStart: { type: Sequelize.DATE },
	appointmentEnd: { type: Sequelize.DATE },
	notes: { type: Sequelize.TEXT }
})