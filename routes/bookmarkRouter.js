const express = require("express");
const auth = require("../middlewares/auth");
const {
  allBookmarks,
  removeBookmark,
  addBookmark,
} = require("../controllers/bookmarkController");
const methodNotAllow = require("../utils/methodNotAllow");

const router = express.Router();

router.route("/bookmark").get(auth, allBookmarks).all(methodNotAllow);

router.route("/add/:id").get(auth, addBookmark).all(methodNotAllow);

router.route("/remove/:id").get(auth, removeBookmark).all(methodNotAllow);

module.exports = router;
