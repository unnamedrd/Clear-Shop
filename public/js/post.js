//const ratingStars = [...document.getElementById("rating")];
const addReviewBtn = document.querySelector("#addReview")
const form = document.querySelector("#reviewForm");
const rating = document.getElementsByClassName("reviewRow")
const submitReview = document.querySelector("#reviewSubBtn");
const editProfile = document.querySelector("#edit")
//const("#BusinessProfileFormCard");


//form.style.display = "none"

addReviewBtn.addEventListener("click", addReview)
function addReview() {

  if (form.style.display == "none") {
  
     form.style.display = "block";
      
  } else {
    form.style.display = "none"
   
 }
}
//event listener needs review



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

getRatingAvg()

editProfile.addEventListener("click", function () {
  alert("Oops! We're working on getting this feature working right now. Please check again later")
})

//to create Edit function 
//toggle all fields to textbox or inputs, with the inner text populated with existing data from MongoDB 