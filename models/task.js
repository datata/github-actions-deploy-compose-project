const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Task', taskSchema);