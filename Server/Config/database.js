const mongoose = require('mongoose');

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((e)=>{
        console.log(e);
        console.error(e);
        process.exit(1)
    })
}
