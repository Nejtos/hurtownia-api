const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Raports = sequelize.define(
  "raports",
  {
    id_raportu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Raports;
