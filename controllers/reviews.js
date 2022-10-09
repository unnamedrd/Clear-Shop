const Review = require("../models/Reviews");
//const cloudinary = require("../middleware/cloudinary");

module.exports = {
  createReview: async (req, res) => {
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.file.path);

      await Review.create({
        review: req.body.review,
        user: req.user.id,
        post: req.body.post
      });
     
      console.log("Review has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  likeReview: async (req, res) => {
    try {
      await Review.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/Review/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteReview: async (req, res) => {
    try {
      // Find Comment by id
      let Review = await Review.findById({ _id: req.params.id });
      // Delete image from cloudinary
      //await cloudinary.uploader.destroy(Comment.cloudinaryId);
      // Delete Comment from db
      await Review.remove({ _id: req.params.id });
      console.log("Deleted Review");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/feed");
    }
  },
};
