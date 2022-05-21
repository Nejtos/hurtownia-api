const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");

router.get("/",async (req, res) => {
    const listofEmployees= await Employees.findAll();
    res.json(listofEmployees);
});

module.exports = router;
