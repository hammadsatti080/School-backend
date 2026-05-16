const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login");
//Username (myapp@gmail.com) password(123456)
router.post("/login", login);

module.exports = router;