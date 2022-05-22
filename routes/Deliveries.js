const express = require("express");
const router = express.Router();
const Deliveries = require("../models/Deliveries");

router.get("/", async (req, res) => {
  const listofDeliveries = await Deliveries.findAll();
  res.json(listofDeliveries);
});

router.post("/update", async (req, res) => {
  const values = {
    id_dostawy: req.body.id_dostawy,
    // data: req.body.deliveries.data,
    status: req.body.status,
  };
  await Deliveries.update(values, {
    where: { id_dostawy: req.body.id_dostawy },
  });
});

module.exports = router;