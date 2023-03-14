const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/duckhunt", {
  logging: false,
});

module.exports = db;
