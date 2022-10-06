const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const reviewsController = require("../controllers/reviews");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
//router.get("/:id", ensureAuth, commentsController.getPost);

router.post("/createReview", reviewsController.createReview);

router.put("/likeReview/:id", reviewsController.likeReview);

router.delete("/deleteReview/:id", reviewsController.deleteReview);

module.exports = router;
