const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("users", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
});
