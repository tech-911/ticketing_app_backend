const express = require("express");
const router = express.Router();
const {
  index,
  register,
  login,
  admin_register,
} = require("../controllers/authController");

router.get("/", index);
router.post("/register", register);
router.post("/admin_register", admin_register);
router.post("/login", login);

module.exports = router;
