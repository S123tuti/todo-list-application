const { model } = require('mongoose')
const Model = require('./model/taskModel.js')

const createTask = async function (req, res) {
      const data = req.body;
      const {title, description, Priority, Status, createdOn} = data;

      if (!title)
      return res
        .status(400)
        .send({ status: false, message: "Please Provide title" });

    if (!description)
      return res
        .status(400)
        .send({ status: false, message: "description is required" });

      if (!Priority)
        return res
          .status(400)
          .send({ status: false, message: "Priority is required" });

          if (!Status)
        return res
          .status(400)
          .send({ status: false, message: "Status is required" });
    
          if (!createdOn)
          return res
            .status(400)
            .send({ status: false, message: "createdOn is required" });
      
      
    
    
      
          return res
            .status(201)
            .send({
              status: true,
              message: "task created sucessfully",
              data: createUser,
            });
    }

    module.exports = {createTask}

