const express = require('express');
const route = require ('./routes/route.js');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors())

mongoose.connect("",{
useNewUrlParser : true
})
.then(()=>{
    console.log('MongoDB is connected')
})
.catch((err)=>{
    console.log(err) 
})


app.use('/' , route)

app.listen(process.env.PORT || 3001 , function(){
    console.log('Express app is running on port '+(process.env.PORT||3001) )
})