const express = require("express");
const router = express.Router();
const verify = require("../verification/verifyToken");
const {
  CreateBooking,
  GetBooking,
  GetNumberofUsers,
  GetNumberofUsersRequest,
  UpdateBookStatus,
} = require("../controllers/bookingController");

router.post("/bookings", verify, CreateBooking);
router.get("/getbookings", verify, GetBooking);
router.post("/getusernumber", verify, GetNumberofUsers);
router.get("/getuserrequest", verify, GetNumberofUsersRequest);
router.put("/updatebookstatus", verify, UpdateBookStatus);

module.exports = router;