const express = require("express");

const router = express.Router();

// Can add router.use routes here

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
