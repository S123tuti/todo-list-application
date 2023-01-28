const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({

    title : {
        required : true,
        unique: true
    },
    description: {
        required: true
    },
    Priority: {
    required: true
    },
    Status: {
    enum: ['Pending', 'fulfill', 'Rejected']
    },
    createdOn: {
    default: '28/01/23'
    },

},{ timestamps: true})

module.exports = mongoose.Model('Task', taskSchema) 