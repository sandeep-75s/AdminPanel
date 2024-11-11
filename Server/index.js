const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();


const adminRoutes = require("./Routers/Admin"); 
const empRoutes = require("./Routers/Employee"); 

const database = require("./Config/database");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Methods allowed
    credentials: true, // If you need to allow cookies/authentication
  }));

app.use("/api/v1/auth",adminRoutes);
app.use("/api/v1/emp",empRoutes);

app.get("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:`your server is up and running`
    });
})

app.listen(PORT ,()=>{
    console.log(`Server Started at ${PORT}`); 
})