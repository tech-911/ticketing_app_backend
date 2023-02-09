const { Booking } = require("../model/Booking");
const { bookingValidation } = require("../validations/bookingValidation");

const CreateBooking = async (req, res) => {
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
    });
    const saveValue = await user.save();
    console.log(saveValue);
    await res.send(saveValue);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = {
  CreateBooking,
};
