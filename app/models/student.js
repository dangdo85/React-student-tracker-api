const mongoose = require('mongoose')
const { Schema, model } = mongoose
const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		grade: {
			type: Number,
			required: true,
		},
		absences: {
			type: Number,
			default: 0,
			required: true,
		},
		improvementPlan: {
			type: String,
			default: 'none',
		},
		owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('student', studentSchema)
