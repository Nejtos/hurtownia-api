const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const RaportsRows = require("./RaportsRows");

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

Raports.hasMany(RaportsRows, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Raports;
