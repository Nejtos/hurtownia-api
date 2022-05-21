const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.get("/",async (req, res) => {
    const listofOrders = await Orders.findAll();
    res.json(listofOrders);
});

module.exports = router;