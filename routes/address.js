const express = require("express");
const router = express.Router();
const AddressControllers = require("../Controllers/AddressControllers");
const verifytoken = require("../middleware/verifytoken");
router.post("/:id", verifytoken, AddressControllers.createAddress);
router.delete("/delete/:id", verifytoken, AddressControllers.deleteAddress);
router.put("/update/:id", verifytoken, AddressControllers.updateAddress);
router.get("/", verifytoken, AddressControllers.getAddress);
module.exports = router;
