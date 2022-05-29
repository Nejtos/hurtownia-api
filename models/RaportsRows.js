const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const RaportsRows = sequelize.define(
  "raportsrows",
  {
    id_produktu: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    opis: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);


RaportsRows.associate = (models) => {
  RaportsRows.belongsTo(models.raports);
}

module.exports = RaportsRows;