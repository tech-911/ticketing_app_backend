const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const { post } = require("../controllers/authController");

router.get("/", verify, post);

module.exports = router;
