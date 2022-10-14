const deleteBtn = document.querySelectorAll("#delBtn");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteReview);
});


function deleteReview() {
    const reviewId = this.parentNode.dataset.id
    console.log("The delete button was clicked")
}