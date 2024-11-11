const express = require("express");
const router = express.Router();

const { createEmp, empList ,updateEmp  , deleteEmp} = require("../Controllers/Employee");

const {auth , isAdmin} = require("../Middleware/auth");

router.post("/createEmp",auth,isAdmin,createEmp);
router.get("/empList",empList);
router.put("/updateEmp",auth,isAdmin,updateEmp);
router.delete("/deleteEmp",deleteEmp);

module.exports = router;