const Admin = require("../Models/Admin");
const jwt = require("jsonwebtoken");
const bycrpt = require("bcrypt");
require("dotenv").config();
exports.signUp = async (req,res) =>{
    try{
        const {firstName,lastName,email,password,confirmPassword,
            accountType, gender} = req.body;
        if( !firstName || !lastName || !email || !password || !confirmPassword || !gender){
            return res.status(400).json({
                success : false,
                message : "Please fill all the details carefully",
            });
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success : false,
                message : "Password and ConfirmPassword does not match please try again"
            });
        }
        const userExit = await Admin.findOne({email : email});
        if(userExit){
            return res.status(400).json({
                success : false,
                message : "Admin already register",
            });
        }
        const hashPassword = await bycrpt.hash(password,10);
        const newAdmin = await Admin.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashPassword,
            accountType : accountType,
            gender : gender,
            image:  `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
        });

        return res.status(200).json({
            success : true,
            message : "Admin Register successfully",
            newAdmin,
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Admin can not be register try again",
        });
    }
}

exports.login = async (req,res) =>{
    try{
        const {email , password} = req.body;
        console.log(email,password);
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "please fill all the details carefully",
            });
        }
        const findUser = await Admin.findOne({email});
        console.log(findUser);
        if(!findUser){
            return res.status(404).json({
                success : false,
                message : "Admin not register",
            });
        }
        if(await bycrpt.compare(password,findUser.password)){
            const payload = {
                email:findUser.email,
                accountType:findUser.accountType,
                id : findUser._id,
            }

            const token = jwt.sign(payload,process.env.SECRET_KEY,{
                expiresIn : "2h"
            });
            findUser.token = token;
            findUser.password = undefined;

            const option = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,option).status(200).json({
                success:true,
                token,
                findUser,
                message:"Admin Logged in successfully",
            })
        }
        else{
            return res.status(500).json({
                success : false,
                message : "password incorrect"
            })
        }
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Some thing went wrong "
        })
    }
}