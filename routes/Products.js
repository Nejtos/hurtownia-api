const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.get("/",async (req, res) => {
    const listofProducts = await Products.findAll();
    res.json(listofProducts);
});

module.exports = router;