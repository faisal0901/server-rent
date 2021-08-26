const express = require("express");

const router = express.Router();
const DetailsPageControllers = require("../Controllers/Api/DetailsPageControllers");
router.get("/:id", DetailsPageControllers.detailPage);

module.exports = router;
