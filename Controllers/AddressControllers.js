const { Address } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createAddress: async (req, res) => {
    try {
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
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  deleteAddress: async (req, res) => {
    try {
      const id = req.params.id;
      const address = await Address.findByPk(id);
      if (!address) {
        return res.json({ message: "addres not found", status: "error" });
      }
      await address.destroy();
      return res.json({ status: "sucess", message: "addres deleted" });
    } catch (error) {
      return res.json({ status: "error", message: error.message });
    }
  },
  updateAddress: async (req, res) => {
    try {
      const id = req.params.id;
      const address = await Address.findByPk(id);
      if (!address) {
        return res.json({ message: "addres not found", status: "error" });
      }
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
      const updateCars = await address.update({
        street_name: req.body.street_name,
        city_id: req.body.city_id,
        zipcode: req.body.zipcode,
        phone_number: +req.body.phone_number,
        mobile_number: +req.body.mobile_number,
        longtitude: req.body.longtitude,
        latitude: req.body.latitude,
        note: req.body.note,
      });
      return res.json({ status: "sucess", message: updateCars });
    } catch (error) {
      return res.json({ status: "error", message: error.message });
    }
  },
  getAddress: async (req, res) => {
    try {
      // const id = req.params.id;
      const address = await Address.findAll();
      if (!address) {
        return res.json({ message: "addres not found", status: "error" });
      }
      return res.json({ data: address }).status(200);
    } catch (error) {
      return res.json({ status: "error", message: error.message });
    }
  },
};
