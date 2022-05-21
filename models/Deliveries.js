const Sequelize = require("sequelize");
const sequelize = require("../util/database");


const Deliveries = sequelize.define(
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
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Deliveries;
