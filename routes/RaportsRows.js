const express = require("express");
const RaportsRows = require("../models/RaportsRows");
const router = express.Router();

router.get("/:baseID", async (req, res) => {
    const listofRows = await RaportsRows.findAll({where: { raportId: req.params.baseID}});
    res.json(listofRows);
});

module.exports = router;