const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Users = sequelize.define(
  "users",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Users;
