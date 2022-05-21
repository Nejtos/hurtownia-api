const express = require("express");
const router = express.Router();
const Producents = require("../models/Producents");

router.get("/",async (req, res) => {
    const listofProducents = await Producents.findAll();
    res.json(listofProducents);
});

module.exports = router;