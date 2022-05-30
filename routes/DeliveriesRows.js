const express = require("express");
const DeliveriesRows = require("../models/DeliveriesRows");
const router = express.Router();

router.get("/:deliveryID", async (req, res) => {
    const listofRows = await DeliveriesRows.findAll({where: { id_dostawy: req.params.deliveryID}});
    res.json(listofRows)
});

module.exports = router;