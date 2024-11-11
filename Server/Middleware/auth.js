const { compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req,res,next)=>{
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ", "");
        console.log("token hai raq ka",token)
        if(!token){
            return res.status(400).json({
                success : false,
                message : "token is messing"
            });
        }
        try{
            const decode = await jwt.verify(token,process.env.SECRET_KEY);
            console.log("decode",decode);
            console.log("decode:-",decode)
            req.admin = decode;
        }catch(e){
            console.log(e);
            return res.status(400).json({
                success:false,
                message:"token is invalid"
            });
        }
        next();
    }catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"something went wrong while verifing the token"
        })
    }
}

exports.isAdmin = async (req,res,next)=>{
    try{
        console.log(req.admin)
        if(req.admin.accountType !=="Admin"){
            return res.status(400).json({
                success : false,
                message : "This a protected router only for Admin"
            });
        }
        next();
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"User role cannot be verify please try again"
        })
    }
}