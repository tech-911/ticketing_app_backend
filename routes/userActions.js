const express = require("express");
const router = express.Router();
const verify = require("../verification/verifyToken");
const {
  CreateBooking,
  GetBooking,
  GetNumberofUsers,
  GetNumberofUsersRequest,
  UpdateBookStatus,
  GetPendingBooking,
  GetNumberofAcceptedRequests,
  GetAcceptedRequests,
  GetRejectedRequests,
  DeleteBooking,
} = require("../controllers/bookingController");

router.post("/bookings", verify, CreateBooking);
router.delete("/deletebooking", verify, DeleteBooking);
router.get("/getpendingbookings", verify, GetPendingBooking);
router.get("/getbookings", verify, GetBooking);
router.post("/getusernumber", verify, GetNumberofUsers);
router.get("/getuserrequest", verify, GetNumberofUsersRequest);
router.get("/acceptedrequestnumber", verify, GetNumberofAcceptedRequests);
router.get("/acceptedrequest", verify, GetAcceptedRequests);
router.get("/rejectedrequest", verify, GetRejectedRequests);
router.put("/updatebookstatus", verify, UpdateBookStatus);

module.exports = router;
