 const express = require('express')
  const mongoose = require('mongoose')
  const bodyparser = require('body-parser')

   const app = express()

    mongoose.connect("mongodb+srv://1:1@cluster0.cfbdxtv.mongodb.net/formdatabase",{}).then(()=>{
        console.log("mangodb connected");
    })


app.set("view engine","ejs");
 app.use(bodyparser.urlencoded({extended:true}));

 app.use("/",require('./server/routes/router'))





    app.listen(10000)