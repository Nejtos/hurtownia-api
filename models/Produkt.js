const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Produkt = sequelize.define(
  "produkt",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nr_partii: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ilosc: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_waznosci: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Produkt;
