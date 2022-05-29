const express = require("express");
const router = express.Router();
const Deliveries = require("../models/Deliveries");

router.get("/", async (req, res) => {
  const listofDeliveries = await Deliveries.findAll();
  res.json(listofDeliveries);
});

router.post("/update", async (req, res) => {
  const value = {
    status: req.body.status,
  };
  await Deliveries.update(value, {
    where: { id: req.body.id },
  });
});

module.exports = router;