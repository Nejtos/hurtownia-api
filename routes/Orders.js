const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.get("/",async (req, res) => {
    const listofOrders = await Orders.findAll();
    res.json(listofOrders);
});

router.post("/update", async (req, res) => {
    const values = {
      id_zamowienia: req.body.id_zamowienia,
      status: req.body.status,
    };
    await Orders.update(values, {
      where: { id_zamowienia: req.body.id_zamowienia },
    });
});

module.exports = router;