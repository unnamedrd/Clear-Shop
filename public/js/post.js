//const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")
const form = document.querySelector("#reviewForm");
const starRating = document.getElementsByClassName("mask-heart");

//form.style.display = "none"

addReviewBtn.addEventListener("click", addReview)
function addReview() {
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
    console.log("When you click upon a star", ratingVal)
  })
})


