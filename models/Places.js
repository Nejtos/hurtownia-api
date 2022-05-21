const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Places = sequelize.define(
  "places",
  {
    id_miejsca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    rzad: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    kolumna: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
  },
  { timestamps: false }
);

module.exports = Places;
