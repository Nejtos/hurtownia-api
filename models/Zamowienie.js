const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Zamowienie = sequelize.define(
  "zamowienie",
  {
    id_zamowienia: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Zamowienie;
