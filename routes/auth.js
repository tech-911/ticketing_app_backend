const express = require("express");
const router = express.Router();
const {
  index,
  register,
  login,
} = require("../controllers/authController");

router.get("/", index);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
