const express = require("express");
const { Token } = require("../models");
const router = express.Router();
router.get("/:id", async (req, res) => {
  const token = await Token.findOne({
    where: {
      user_id: req.params.id,
    },
    attributes: ["token"],
    limit: 1,
  });
  return res.json({ token, status: "success" });
});

module.exports = router;
