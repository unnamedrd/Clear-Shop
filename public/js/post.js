//const deleteBtn = document.querySelectorAll("#delBtn");
const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")


addReviewBtn.addEventListener('click', showReviewForm)

function showReviewForm() {
  console.log("show review form")
}


function getRating(stars) {
  let inactiveStars = "mask mask-heart ";
  //let activeStars = " mask mask-heart checked "; //color it inactive
  let starsLength = stars.length //assigns variable to length of parameters 
  let i;
}