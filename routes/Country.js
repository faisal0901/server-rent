const express = require("express");
const router = express.Router();

const CountryControllers = require("../Controllers/CountryControllers");
/* GET users listing. */

router.get("/", CountryControllers.getAllCountry);
module.exports = router;
