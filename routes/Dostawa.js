const express = require("express");
const router = express.Router();
const Dostawy = require("../models/Dostawa");

router.get("/dostawy",async (req, res) => {
    const listaDostaw = await Dostawy.findAll();
    res.json(listaDostaw);
});

module.exports = router;