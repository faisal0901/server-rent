const { CarsImage } = require("../models");
const fs = require("fs-extra");

module.exports = {
  createImage: async (req, res) => {
    try {
      const id = req.params.id;

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
    try {
      const id = req.params.id;
      const image = await CarsImage.findByPk(id);
      if (!image) {
        return res.json({ message: "image not found", status: "error" });
      }
      console.log(image);
      fs.unlink(`./public/${image.image}`);
      await image.destroy();
      return res.json({ status: "success", message: "images deleted" });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
