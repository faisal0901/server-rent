const express = require("express");

const router = express.Router();
const homePageControllers = require("../Controllers/HomePageControllers");
router.get("/", homePageControllers.homePage);

module.exports = router;
