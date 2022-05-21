const express = require("express");
const router = express.Router();
const Deliveries = require("../models/Deliveries");

router.get("/",async (req, res) => {
    const listofDeliveries = await Deliveries.findAll();
    res.json(listofDeliveries);
});

module.exports = router;