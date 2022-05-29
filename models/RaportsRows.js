const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const RaportsRows = sequelize.define(
  "raportsrows",
  {
    id_raportu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_produktu: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    opis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = RaportsRows;
