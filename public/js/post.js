const deleteBtn = document.querySelectorAll("#delBtn");
const ratingStars = [...document.querySelectorAll(".mask-heart")];

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteReview);
});


function deleteReview() {
    const reviewId = this.parentNode.dataset.id
    console.log("The delete button was clicked")
}

function getRating(stars) {
  let inactiveStars = ""
  let activeStars = ""

  let starCount = ratingStars.length

  let i;
}