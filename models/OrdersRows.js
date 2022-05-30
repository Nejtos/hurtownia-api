const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const OrdersRows = sequelize.define(
  "ordersrows",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    kategoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    element: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ilosc: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
  },
  { timestamps: false }
);


OrdersRows.associate = (models) => {
  OrdersRows.belongsTo(models.orders);
}

module.exports = OrdersRows;