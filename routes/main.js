const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const formController = require("../controllers/form");
const postsController = require("../controllers/posts");
const landingController = require("../controllers/landing")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", landingController.getLanding);
router.get("/form", ensureAuth, formController.getIndex)
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
