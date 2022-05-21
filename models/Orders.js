const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Orders = sequelize.define(
  "orders",
  {
    id_zamowienia: {
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

module.exports = Orders;
