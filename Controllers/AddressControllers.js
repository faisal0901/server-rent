const { Address } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createAddress: async (req, res) => {
    const id = req.params.id;

    const rules = {
      street_name: "string|empty:false",
      city_id: "number|empty:false",
      zipcode: "number|empty:false",
      phone_number: "number|empty:false",
      mobile_number: "number|optional",

      note: "string|optional",
    };
    const validate = v.validate(req.body, rules);
    if (validate.length) {
      return res.json({ message: validate, status: "error" });
    }
    const address = await Address.create({
      street_name: req.body.street_name,
      city_id: req.body.city_id,
      zipcode: req.body.zipcode,
      phone_number: +req.body.phone_number,
      mobile_number: +req.body.mobile_number,
      longtitude: req.body.longtitude,
      latitude: req.body.latitude,
      note: req.body.note,
      cars_id: id,
    });
    return res.json({
      status: "success",
      data: {
        address,
      },
    });
  },
};
