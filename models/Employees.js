const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Employees = sequelize.define(
  "employees",
  {
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telNum: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Employees;
