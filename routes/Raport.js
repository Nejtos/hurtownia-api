const express = require("express");
const router = express.Router();
const Raporty = require("../models/Raport");

router.get("/raporty",async (req, res) => {
    const listaRaportow = await Raporty.findAll();
    res.json(listaRaportow);
});

module.exports = router;