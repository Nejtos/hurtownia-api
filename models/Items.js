const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Items = sequelize.define(
  "items",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    id_miejsca: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    ilosc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Items;
