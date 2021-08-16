const { Rating } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {
  ratingCreate: async (req, res) => {
    try {
      const user_id = req.user.data.id;

      const rules = {
        rating: "number|empty:false|integer|positive|min:1|max:5",
        note: "string|optional",
      };
      const validate = v.validate(req.body, rules);
      if (validate.length) {
        return res.status(403).json({ status: "error", message: validate });
      }
      const createRating = await Rating.create({
        user_id: user_id,
        rating: req.body.rating,
        note: req.body.note,
      });
      return res.json({ message: "success", data: { createRating } });
    } catch (error) {
      console.log(error);
    }
  },
  ratingDelete: async (req, res) => {
    try {
      const id = req.params;
      const rating = await Rating.findByPk(id);
      if (!rating) {
        return res.json({ status: "error", message: "rating not found" });
      }
      await rating.destroy();
      return res.json({ status: "success", massage: "rating deleted" });
    } catch (error) {
      console.log(error);
    }
  },
};
