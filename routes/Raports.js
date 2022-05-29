const express = require("express");
const router = express.Router();
const app = express();
const Raports = require("../models/Raports");
var bodyParser = require("body-parser");
const RaportsRows = require("../models/RaportsRows");
var jsonParser = bodyParser.json();
app.use(express.json());

router.get("/",async (req, res) => {
    const listofRaports= await Raports.findAll();
    res.json(listofRaports);
});

router.post("/create", jsonParser, async (req, res) => {
    await Raports.create({id_raportu: req.body.id_raportu, data: req.body.data});
    for (let index in req.body.inputList) {
      const raport = await Raports.findOne({where: { id_raportu: req.body.id_raportu}})
      await RaportsRows.create({ id_produktu: req.body.inputList[index].id_produktu, opis: req.body.inputList[index].opis, raportId: raport.id})
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
