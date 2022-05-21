const express = require("express");
const router = express.Router();
const Elements = require("../models/Elements");

router.get("/",async (req, res) => {
    const listofElements = await Elements.findAll();
    res.json(listofElements);
});

module.exports = router;