const db = require("./database");
const Users = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// define model relationships here

module.exports = {
  db,
  Users,
};
