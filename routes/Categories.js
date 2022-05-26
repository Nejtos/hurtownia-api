const express = require("express");
const router = express.Router();
const app = express();
const Categories = require("../models/Categories");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.json());

router.get("/",async (req, res) => {
    const listofCategories = await Categories.findAll();
    res.json(listofCategories);
});

router.post("/create", jsonParser, (req, res) => {
    const { id_kategorii, nazwa_kategorii } = req.body;
    Categories.create({ id_kategorii: id_kategorii, nazwa_kategorii: nazwa_kategorii })
    .then(() => {
        res.json("Create new category");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

router.post("/edit", jsonParser, (req, res) => {
  console.log(req.body)
  //const { id_kategorii, nazwa_kategorii } = req.body;
  Categories.update({ id_kategorii: req.body.id_kategorii, nazwa_kategorii: req.body.nazwa_kategorii }, {where: { id: req.body.id }})
  .then(() => {
      res.json("Edit category");
  })
  .catch((err) => {
    if (err) {
      res.status(400).json({ error: err });
    }
  });
});

router.post("/delete", jsonParser, (req, res) => {
  const { id_kategorii, status } = req.body;
  if(status === "Tak"){
    Categories.destroy({ where: { id_kategorii: id_kategorii } })
    .then(() => {
        res.json("Delete category");
    })
    .catch((err) => {
    if (err) {
        res.status(400).json({ error: err });
    }
    });
  }
});

module.exports = router;