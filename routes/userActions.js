const express = require("express");
const router = express.Router();
const verify = require("../verification/verifyToken");
const { CreateBooking } = require("../controllers/bookingController");

router.post("/bookings", verify, CreateBooking);

module.exports = router;
