const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Raport = sequelize.define(
  "raport",
  {
    id_raportu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Raport;
