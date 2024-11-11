const Employee = require("../Models/Employee");

exports.createEmp = async (req,res) =>{
    try{
        const {firstName , lastName , email ,
             designation , gender , course} = req.body;
        
        if(!firstName || !lastName || !email || !designation || ! gender || !course){
            return res.status(400).json({
                success : false,
                message : "Please fill all the details",
            });
        }
        console.log("Creating emp");
        const findEmp = await Employee.findOne({email:email});
        console.log("Emp:=",findEmp)
        if(findEmp){
            return res.status(400).json({
                success : false,
                message : "Employee already exist",
            });
        }
        const newEmp = await Employee.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            designation : designation,
            gender : gender,
            course : course,
            image : `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
        });
        return res.status(200).json({
            success : true,
            message : "New Employee Registered Successfully",
            newEmployee : newEmp,
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Faild to register new emp"
        });
    }
}

exports.empList = async (req,res) =>{
    try{
        console.log("i am inside")
        const EmpList = await Employee.find({});
        return res.status(200).json({
            success : true,
            message : "All employee founded",
            EmployeeList : EmpList,
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Failed to get all employee"
        });
    }
}

exports.deleteEmp = async (req,res)=>{
    try{
        const {email} = req.body;
        console.log(email)
        const findEmp = await Employee.findOne({email:email});
        console.log(findEmp);
        if(!findEmp){
            return res.status(404).json({
                success : false,
                message : "Employee not exist",
            });
        }
        const deletedEmp = await Employee.findByIdAndDelete({_id:findEmp._id});
        return res.status(200).json({
            success : true,
            message : "Employee deleted successfully",
            deletedEmp,
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Failed to delete the employee",
        });
    }
}

exports.updateEmp = async (req,res)=>{
    try{
        const {firstName , lastName , email ,
            designation , gender , course} = req.body;
        
        if(!firstName || !lastName || !email || !designation || ! gender || !course){
            return res.status(400).json({
                success : false,
                message : "Please fill all the details",
            });
        }
        const Emp = await Employee.findOneAndUpdate({email:email},
                                                {
                                                    firstName:firstName,
                                                    lastName : lastName,
                                                    email : email,
                                                    designation : designation,
                                                    gender : gender,
                                                    course : course,
                                                },{new:true});
        return res.status(200).json({
            success : true,
            message : "Employee updated successfully",
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success : false,
            message : "Faild to update the employee",
        });
    }
}