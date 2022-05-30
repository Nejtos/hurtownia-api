const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const DeliveriesRows = require("./DeliveriesRows");


const Deliveries = sequelize.define(
  "deliveries",
  {
    id_dostawy: {
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

Deliveries.hasMany(DeliveriesRows, {
  foreignKey: 'id_dostawy',
  as: 'deliveriesrows',
});

module.exports = Deliveries;
