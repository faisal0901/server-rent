const { Cars } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createCars: async (req, res) => {
    try {
      const rules = {
        carName: "string|empty:false",
        carRealiseDate: "string|empty:false",
        carEngine: "string|empty:false",
        carGas: "string|empty:false",
        carHoursePower: "string|empty:false",
        carCC: "string|empty:false",
        price: "number|empty:false|positive",
      };
      const validate = v.validate(req.body, rules);
      if (validate.length) {
        return res.json({ massage: validate, status: "error" });
      }
      const createCars = await Cars.create({
        carName: req.body.carName,
        carRealiseDate: req.body.carRealiseDate,
        carEngine: req.body.carEngine,
        carGas: req.body.carGas,
        carHoursePower: req.body.carHoursePower,
        carCC: req.body.carCC,
        price: req.body.price,
      });
      return res.json({
        status: "succes",
        data: {
          id: createCars.id,
          carName: createCars.carName,
          carRealiseDate: createCars.carRealiseDate,
          carEngine: createCars.carEngine,
          carGas: createCars.carGas,
          carHoursePower: createCars.carHoursePower,
          carCC: createCars.carCC,
          price: createCars.price,
        },
      });
    } catch (error) {
      return res.json({ status: "error", message: error.message });
    }
  },
  deleteCars: async (req, res) => {
    try {
      const id = req.params.id;
      const car = await Cars.findByPk(id);

      if (!car) {
        return res
          .json({ message: "car not found", status: "error" })
          .status(404);
      }
      await car.destroy();
      return res.json({ message: "car deleted", status: "success" });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  updateCars: async (req, res) => {
    try {
      const id = req.params.id;

      const rules = {
        carName: "string|empty:false",
        carRealiseDate: "string|empty:false",
        carEngine: "string|empty:false",
        carGas: "string|empty:false",
        carHoursePower: "string|empty:false",
        carCC: "string|empty:false",
        price: "number|empty:false|positive",
      };
      const validate = v.validate(req.body, rules);
      if (validate.length) {
        return res.json({ status: "error", message: validate });
      }
      const car = await Cars.findByPk(id);
      if (!car) {
        return res.json({ message: "car not found", status: "error" });
      }
      const {
        carName,
        carRealiseDate,
        carEngine,
        carGas,
        carHoursePower,
        carCC,
        price,
      } = req.body;
      await car.update({
        carName,
        carRealiseDate,
        carEngine,
        carGas,
        carHoursePower,
        carCC,
        price,
      });
      return res.json({
        status: "success",
        data: {
          id: car.id,
          carName,
          carRealiseDate,
          carEngine,
          carGas,
          carHoursePower,
          carCC,
          price,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getCars: async (req, res) => {
    const car_ids = req.query.car_id || [];

    const sqlOption = {
      attributes: [
        "id",
        "carName",
        "carRealiseDate",
        "carEngine",
        "carGas",
        "carHoursePower",
        "carCC",
        "price",
      ],
    };
    if (car_ids.length) {
      sqlOption.where = {
        id: car_ids,
      };
    }
    const cars = await Cars.findAll(sqlOption);
    return res.json({ status: "success", data: cars });
  },
};
