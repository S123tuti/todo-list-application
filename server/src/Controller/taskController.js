const { model } = require('mongoose')
const Model = require('./Model/model.js')

module.exports.todo = async (req,res) => {
    const todo = await model.find()
    res.send()
}

module.exports.getTodo = async (req,res) => {

    const text = req.body
    Model
    .create({text})
    .then((data) => {
        console.log("Task added succesfully....");
    })
    const todo = await model.find()
    res.send()
}