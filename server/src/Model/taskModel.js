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

    },
    Status: {

    },
    createdOn: {

    },

},{ timestamps: true})

module.exports = mongoose.Model('Task', taskSchema) 