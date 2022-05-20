const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Dostawa = sequelize.define(
  "deliveries",
  {
    id_dostawy: {
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

module.exports = Dostawa;
