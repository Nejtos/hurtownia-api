const express = require("express");
const router = express.Router();
const app = express();
const Elements = require("../models/Elements");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.json());

router.get("/",async (req, res) => {
    const listofElements = await Elements.findAll();
    res.json(listofElements);
});

router.post("/create", jsonParser, (req, res) => {
    const { id_elementu, nazwa_elementu } = req.body;
    Elements.create({ id_elementu: id_elementu, nazwa_elementu: nazwa_elementu })
    .then(() => {
        res.json("Create new element");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

module.exports = router;