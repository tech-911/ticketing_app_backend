const { Booking } = require("../model/Booking");
const { bookingValidation } = require("../validations/bookingValidation");
const { User } = require("../model/User");

const CreateBooking = async (req, res) => {
  const status = "pending";
  const { name, email, destination, passangers_number, time, date, car_type } =
    req.body;

  //===============validation===============
  const { error, value } = bookingValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //======================saving data on DB=======================
  try {
    const user = await new Booking({
      name,
      email,
      destination,
      passangers_number,
      time,
      date,
      car_type,
      status,
    });
    const saveValue = await user.save();
    console.log(saveValue);
    await res.send(saveValue);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
const GetBooking = async (req, res) => {
  Booking.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
};
const GetNumberofUsers = async (req, res) => {
  const { user_type } = req.body;
  User.countDocuments({ role: user_type }, (err, count) => {
    if (err) return res.status(400).send(err);
    res.send({ count });
  });
};
const GetNumberofUsersRequest = (req, res) => {
  Booking.countDocuments({ status: "pending" }, (err, count) => {
    if (err) return res.status(400).send(err);
    res.send({ count });
  });
};
module.exports = {
  CreateBooking,
  GetBooking,
  GetNumberofUsers,
  GetNumberofUsersRequest,
};
