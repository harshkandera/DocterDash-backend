const express = require("express");
const router = express.Router();

const { registerUser,loginUser , registerDoctor, loginDoctor} = require("../controllers/Auth");
const { getAllDoctors } = require("../controllers/Doctor");

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/doctor/register", registerDoctor);
router.post("/doctor/login", loginDoctor);
router.get("/doctors", getAllDoctors);

module.exports = router;
