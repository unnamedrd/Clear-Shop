//const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")

const businessForm = document.querySelector("#BusinessProfileFormCard");


//form.style.display = "none"

addReviewBtn.addEventListener("click", addReview)
function addReview() {

  if (businessForm.style.display == "none") {
  
     businessForm.style.display = "block";
      
  } else {
    businessForm.style.display = "none"
   
 }
}
//event listener needs review
