const mongoose = require ('mongoose');
const mongoosefileds = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    
})
const mongoosefiledsexports = mongoose.model("Databasecollection",mongoosefileds);

 module.exports=mongoosefiledsexports;