const { City } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createCity: async (req, res) => {
    const validate = v.validate(req.body, {
      name: "string|empty:false",
      country_id: "number|empty:false",
    });
    if (validate.length) {
      return res.json({ status: "error", message: validate });
    }
    const city = await City.create({
      name: req.body.name,
      country_id: req.body.country_id,
    });

    return res.json({
      status: "succes",
      data: {
        city,
      },
    });
  },
  getCityByCountryId: async (req, res) => {
    const id = req.params.id;
    const city = await City.findAll({
      where: {
        country_id: id,
      },
    });
    return res.json({ status: "success", data: city });
  },
};
