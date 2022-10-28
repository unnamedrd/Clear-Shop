//const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")
const form = document.querySelector("#reviewForm");

//form.style.display = "none"

addReviewBtn.addEventListener("click", addReview)
function addReview() {
  if (form.style.display == "none") {
       form.style.backgroundColor = "blue"
  } else {
    form.style.display = "none"
 }
}



function getRating(stars) {
  let inactiveStars = "mask mask-heart ";
  //let activeStars = " mask mask-heart checked "; //color it inactive
  let starsLength = stars.length //assigns variable to length of parameters 
  let i;
}