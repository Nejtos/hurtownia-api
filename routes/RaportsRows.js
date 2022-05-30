const express = require("express");
const Products = require("../models/Products");
const RaportsRows = require("../models/RaportsRows");
const router = express.Router();

router.get("/:baseID", async (req, res) => {
    const productsTab = [];
    const dataTab = [];
    const listofRows = await RaportsRows.findAll({where: { raportId: req.params.baseID}});
    for (let row of listofRows){
        const products = await Products.findOne({where: { id_produktu: row.id_produktu}});
        productsTab.push(products);
    }
    let iter = 0;
    for(let t of productsTab){
        const info = { 
            id_produktu: t.dataValues.id_produktu,
            nr_partii: t.dataValues.nr_partii,
            data_waznosci: t.dataValues.data_waznosci,
            ilosc: t.dataValues.ilosc,
            opis: listofRows[iter++].opis,
        }
        dataTab.push(info);
    }
    //console.log(listofRows[0].dataValues);
    // res.json({listofRows: listofRows[0].dataValues, tab: tab[0].dataValues});
    res.json(dataTab);
});

module.exports = router;