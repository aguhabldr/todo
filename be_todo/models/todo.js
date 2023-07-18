const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema(
    {
        'name': { type: String, required: true },
        'isDone': { type: Boolean, required: true, default: false },
    },
    { timestamps: true }
)

module.exports = mongoose.model('todo', todoSchema);