const { CarsFeature } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createImage: async (req, res) => {
    try {
      const id = req.params.id;
      if (!req.files) {
        return res.json({
          status: "error",
          massage: "image feature is required",
        });
      }

      const rules = {
        feature_quantity: "string|empty:false",
      };
      const validate = v.validate(req.body, rules);
      if (validate.length) {
        return res.json({ status: "error", message: validate });
      }
      const create = await CarsFeature.create({
        car_id: id,
        feature_quantity: req.body.feature_quantity,
        feature_image: `images/${req.files[0].filename}`,
      });
      return res.json({
        status: "succes",
        data: {
          id: create.id,
          feature_quantity: create.feature_quantity,
          feature_image: create.feature_image,
        },
      });
    } catch (error) {
      console.log(error);
      return res.json({ status: "error", message: error.message }).status(500);
    }
  },
  deleteImage: async (req, res) => {
    const id = req.params.id;
    const feature = await CarsFeature.findByPk(id);
    if (!feature) {
      return res
        .status(404)
        .json({ status: "error", message: "feature not found" });
    }
    fs.unlink(`./public/${feature.feature_image}`);
    await feature.destroy();
    return res.json({ status: "success", message: "images deleted" });
  },
};
