const express = require("express");
const { register, login, getUser } = require("../controllers/authController");
const methodNotAllow = require("../utils/methodNotAllow");
const auth = require("../middlewares/auth");
// const methoNotAllow = require("../utils/methodNotAllow");

const router = express.Router();

//router.post("/register", register);

router.route("/register").post(register).all(methodNotAllow);
//====================================

//router.post("login", login);
router.route("/login").post(login).all(methodNotAllow);

// ==========================
router.route("/user").post(auth, getUser).all(methodNotAllow);

module.exports = router;
