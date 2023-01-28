const express = require('express');
const route = require ('./router/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/loginassign",{
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