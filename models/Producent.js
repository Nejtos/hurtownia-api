const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Producent = sequelize.define(
  "producent",
  {
    id_producenta: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nazwa_producenta: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = Producent;
