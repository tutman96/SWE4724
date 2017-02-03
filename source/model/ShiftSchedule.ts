import Sequelize = require('sequelize');
import Database = require('../database');

export interface ShiftScheduleAttribute {
	employeeId: number;
	dayOfWeek: string;
	/**
	 * Minutes since midnight
	 */
	startTime: number;
	/**
	 * Minutes since midnight
	 */
	endTime: number;
}

export interface ShiftScheduleInstance extends Sequelize.Instance<ShiftScheduleAttribute>, ShiftScheduleAttribute {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
export interface ShiftScheduleModel extends Sequelize.Model<ShiftScheduleInstance, ShiftScheduleAttribute> { }

export var ShiftSchedule = Database.define<ShiftScheduleInstance, ShiftScheduleAttribute>("ShiftSchedule", {
	employeeId: { type: Sequelize.INTEGER },
	dayOfWeek: {
		type: Sequelize.STRING(7),
		validate: {
			is: /[MTWRFSU]/
		}
	},
	startTime: {
		type: Sequelize.INTEGER,
		validate: {
			max: 60 * 24,
			min: 0
		}
	},
	endTime: {
		type: Sequelize.INTEGER,
		validate: {
			max: 60 * 24,
			min: 0,
			greaterThanStartTime: function (endTime) {
				if (endTime < this.startTime) throw new Error("endTime must be after startTime");
			}
		}
	}
})