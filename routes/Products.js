const express = require("express");
const router = express.Router();
const app = express();
const Products = require("../models/Products");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.json());


router.get("/", async (req, res) => {
  const listofProducts = await Products.findAll();
  res.json(listofProducts);
});

router.post("/create", jsonParser, (req, res) => {
  const { id_produktu, nazwa_kategorii, nazwa_elementu, nazwa_producenta, nr_partii, data_waznosci, ilosc } = req.body;
  Products.create({
    id_produktu: id_produktu,
    nazwa_kategorii: nazwa_kategorii,
    nazwa_elementu: nazwa_elementu,
    nazwa_producenta: nazwa_producenta,
    nr_partii: nr_partii,
    data_waznosci: data_waznosci,
    ilosc: ilosc,
  })
    .then(() => {
      res.json("New product created");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

router.post("/edit", jsonParser, (req, res) => {
  Products.update({
    id_produktu: req.body.id_produktu,
    nazwa_kategorii: req.body.nazwa_kategorii,
    nazwa_elementu: req.body.nazwa_elementu,
    nazwa_producenta: req.body.nazwa_producenta,
    nr_partii: req.body.nr_partii,
    data_waznosci: req.body.data_waznosci,
    ilosc: req.body.ilosc,
  }, { where: { id: req.body.id } })
    .then(() => {
      res.json("Product edited");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

router.post("/delete", jsonParser, (req, res) => {
  const { id_produktu, status } = req.body;
  if (status === "Tak") {
    Products.destroy({ where: { id_produktu: id_produktu } })
      .then(() => {
        res.json("Product deleted");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  }
});

module.exports = router;