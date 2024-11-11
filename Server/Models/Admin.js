const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true,
        trim : true
    },
    lastName:{
        type : String,
        required : true,
        trim : true,
    },
    email:{
        type : String,
        required : true,
        trim  : true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type : String,
        required:true,
        enum:["Admin"],
    },
    gender:{
        type:String,
        required : true,
    },
    image:{
        type : String,
        required : true,
    }

})

module.exports = mongoose.model("admin",adminSchema);