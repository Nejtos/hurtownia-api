const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Elements = sequelize.define(
  "elements",
  {
    id_elementu: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    nazwa_elementu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Elements;
