const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Products = sequelize.define(
  "products",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nazwa_kategorii: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nazwa_elementu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nazwa_producenta: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nr_partii: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_waznosci: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    ilosc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Products;
