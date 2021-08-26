const express = require("express");

const router = express.Router();
const SearchPageControllers = require("../Controllers/Api/SearchPageControllers");
router.get("/:id", SearchPageControllers.searchPage);

module.exports = router;
