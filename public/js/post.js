//const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")
const form = document.querySelector("#reviewForm");
const starRating = document.getElementsByClassName("mask-heart");
const rating = document.getElementsByClassName("reviewRow")
const submitReview = document.querySelector("#reviewSubBtn");

//form.style.display = "none"

addReviewBtn.addEventListener("click", addReview)
function addReview() {
  console.log("you want to leave a review?")
  if (form.style.display == "none") {
       form.style.backgroundColor = "blue"
  } else {
    form.style.display = "none"
 }
}

Array.from(starRating).forEach(item => {
  item.addEventListener('click', event => {
    var ratingVal = item.getAttribute('value')
    return ratingVal
    //post request to backend
    console.log("When you click upon a star", ratingVal)
  })
})

reviewSubBtn.addEventListener("click", getRatingAvg);//alternatively calc everytime the page loads and only display average if ratings are present in collection with conditional

function getRatingAvg() {
  console.log("calcing average")
  const totalRatingScore = 0;
   Array.from(rating).forEach((item) => {
    var ratingVal = itme.getAttribute("value");
    totalRatingScore += ratingVal;
    totalRatingScore = totalRatingScore / (Array.length - 1);
    console.log(totalRatingScore);
  });
}
