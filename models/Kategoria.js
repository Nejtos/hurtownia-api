const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Kategoria = sequelize.define(
  "kategoria",
  {
    id_kategorii: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nazwa_kategorii: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Kategoria;
