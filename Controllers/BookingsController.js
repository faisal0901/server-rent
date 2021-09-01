const { Booking } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createBooking: async (req, res) => {
    console.log(req.body.user_id);
    try {
      if (!req.files) {
        return res.json({ message: "please input an images" });
      }
      const createBookings = await Booking.create({
        fullName: req.body.fullName,
        duration: req.body.duration,
        startDate: new Date(),
        endDate: new Date(),
        email: req.body.email,
        bankHolder: req.body.bankHolder,
        proofPayment: req.files[0].filename,
        price: req.body.price,
        bankFrom: req.body.bankFrom,
        invoice_number: Math.random(),
        payment_status: "pending",
        car_id: req.body.car_id,
        phoneNumber: req.body.phoneNumber,
        user_id: +req.body.user_id,
      });
      return res.json({ status: "success", data: createBookings });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
