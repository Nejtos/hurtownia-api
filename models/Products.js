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
    nr_partii: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ilosc: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_waznosci: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Products;
