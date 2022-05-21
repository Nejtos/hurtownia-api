const express = require("express");
const router = express.Router();
const Raports = require("../models/Raports");

router.get("/",async (req, res) => {
    const listofRaports= await Raports.findAll();
    res.json(listofRaports);
});

module.exports = router;
