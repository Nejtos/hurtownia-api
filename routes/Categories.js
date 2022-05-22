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

// router.post("/create", async (req, res) => {
//     const values = {
//       id_kategorii: req.body.id_kategorii,
//       // data: req.body.deliveries.data,
//       nazwa_kategorii: req.body.nazwa_kategorii,
//     };
//     await Categories.create(values, {
//       where: { id_kategorii: req.body.id_kategorii, nazwa_kategorii: req.body.nazwa_kategorii },
//     });
// });


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

module.exports = router;