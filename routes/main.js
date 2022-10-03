const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const loginController = require("../controllers/login");
const postsController = require("../controllers/posts");
const landingController = require("../controllers/landing")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

router.get("/", loginController.getIndex)
router.get("/landing", ensureAuth, landingController.getLanding);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
