const express = require("express");
const router = express.Router();
const app = express();
const Items = require("../models/Items");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.json());

router.get("/",async (req, res) => {
    const listofItem= await Items.findAll();
    res.json(listofItem);
});

router.post("/create", jsonParser, (req, res) => {
    const { id_produktu, id_miejsca, ilosc } = req.body;
    console.log(req.body);
    Items.create({ id_produktu: id_produktu, id_miejsca: id_miejsca, ilosc: ilosc })
    .then(() => {
        res.json("New product added");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

module.exports = router;
