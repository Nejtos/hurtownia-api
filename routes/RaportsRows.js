const express = require("express");
const router = express.Router();
const app = express();
const RaportsRows = require("../models/RaportsRows");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.json());

router.get("/", async (req, res) => {
  const listofRaportsRows = await RaportsRows.findAll();
  res.json(listofRaportsRows);
});

router.post("/create", jsonParser, (req, res) => {
  for (let index in req.body.inputList) {
    RaportsRows.create({ id_raportu: req.body.id_raportu, id_produktu: req.body.inputList[index].id_produktu, opis: req.body.inputList[index].opis })
      .then(() => {
        res.json("New row of report added");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  }
});

module.exports = router;
