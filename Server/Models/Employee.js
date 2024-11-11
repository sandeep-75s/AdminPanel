const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
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
    designation:{
        type : String,
        required : true,
        enum : ["HR" , "Manager" , "Sales"],
    },
    gender:{
        type:String,
        required : true,
    },
    course:{
        type: String,
        required : true,
    },
    image:{
        type : String,
        required : true,
    },
    status:{
        type:String,
        default:"Active"
    }

})

module.exports = mongoose.model("Employee",employeeSchema);