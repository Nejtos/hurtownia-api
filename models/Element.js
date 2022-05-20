const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Element = sequelize.define(
  "element",
  {
    id_elementu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nazwa_elementu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_kategorii: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_miejsca: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Element;
