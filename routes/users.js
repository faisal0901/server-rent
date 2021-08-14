const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifytoken");
const UserController = require("../Controllers/UserController");
/* GET users listing. */
router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.post("/logout", verifyToken, UserController.userLogout);
router.get("/:id", UserController.user);
router.get("/", UserController.users);
router.delete("/:id", UserController.userDestroy);
module.exports = router;
