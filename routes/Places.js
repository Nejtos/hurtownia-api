const express = require("express");
const router = express.Router();
const Places = require("../models/Places");

router.get("/",async (req, res) => {
    const listofPlaces = await Places.findAll();
    res.json(listofPlaces);
});

module.exports = router;