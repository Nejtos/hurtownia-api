const express = require("express");
const router = express.Router();
const Categories = require("../models/Categories");

router.get("/",async (req, res) => {
    const listofCategories = await Categories.findAll();
    res.json(listofCategories);
});

module.exports = router;