const express = require("express");
const OrdersRows = require("../models/OrdersRows");
const router = express.Router();

router.get("/:orderID", async (req, res) => {
    const listofRows = await OrdersRows.findAll({where: { id_zamowienia: req.params.orderID}});
    res.json(listofRows)
});

module.exports = router;