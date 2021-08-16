const { CarsImage } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createImage: async (req, res) => {
    try {
      const id = req.params.id;
      if (!req.files) {
        return res.json({ status: "error", message: "input image" });
      }
      for (let i = 0; i < req.files.length; i++) {
        await CarsImage.create({ image: req.files[i].fileName, car_id: id });
      }
      return res.json({
        status: "success",
        massage: "imageUploaded",
        data: {
          id,
        },
      });
    } catch (error) {
      return res.json({ status: "error", message: error.message });
    }
  },
};
