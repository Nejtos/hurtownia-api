const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const DeliveriesRows = sequelize.define(
  "deliveriesrows",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ilosc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data_waznosci: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    nr_partii: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  },
  { timestamps: false }
);


DeliveriesRows.associate = (models) => {
  DeliveriesRows.belongsTo(models.deliveries);
}

module.exports = DeliveriesRows;