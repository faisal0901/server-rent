const { CarsImage } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = {
  createImage: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(req.files);
      if (!req.files) {
        return res.json({ status: "error", message: "input image" });
      }
      for (let i = 0; i < req.files.length; i++) {
        await CarsImage.create({
          image: `images/${req.files[i].filename}`,
          car_id: id,
        });
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
  deleteImage: async (req, res) => {
    const id = req.params.id;
    const image = await CarsImage.findByPk(id);
    if (!image) {
      return res.json({ message: "image not found", status: "error" });
    }
    await image.destory();
  },
};
