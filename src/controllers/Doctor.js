const Doctor = require("../models/Doctor");
const User = require("../models/User");
const mongoose = require("mongoose");


exports.getAllDoctors = async (req, res) => {
  try {
    const { speciality } = req.query;
    if(speciality != "All"){
      const doctors = await Doctor.find({ specialization: speciality });
      return res.status(200).json({
        success: true,
        count: doctors.length,
        data: doctors,
      });
    }
    const doctors = await Doctor.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}



