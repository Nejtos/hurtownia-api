const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const OrdersRows = require("./OrdersRows");

const Orders = sequelize.define(
  "orders",
  {
    id_zamowienia: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Orders.hasMany(OrdersRows, {
  foreignKey: 'id_zamowienia',
  as: 'ordersrows',
});

module.exports = Orders;
