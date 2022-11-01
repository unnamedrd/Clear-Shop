const Review = require("../models/Reviews");
const Post = require("../models/Post");
//const cloudinary = require("../middleware/cloudinary");

module.exports = {
  createReview: async (req, res) => {
    const post = req.body.post
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.file.path);

      await Review.create({
        review: req.body.review,
        rating: req.body.rating,
        user: req.user.id,
        post: req.body.post
      });
     
      console.log("Review has been added!");
      res.redirect(`/post/${post}`);
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
      let review = await Review.findById({ _id: req.params.id });
      let postId = await Post.findById({ _id: req.params.id });
        const post = req.body.post;
    
      // Delete Review from db
      await review.remove({ _id: req.params.id });
      console.log("Deleted Review");
      res.redirect(`/post/${post.id}`); //this needs to be changed to the post id, it's pulling review id
    } catch (err) {
      res.redirect("/feed");
    }
  },
};
