const { Country } = require("../models");
module.exports = {
  getAllCountry: async (req, res) => {
    try {
      const country = await Country.findAll();
      return res.json({ status: "success", data: country });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  },
};
