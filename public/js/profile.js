//const ratingStars = [...document.getElementById("rating")];
const addBusinessBtn = document.querySelector("#getForm");

const businessForm = document.querySelector("#BusinessProfileFormCard");


//form.style.display = "none"

addBusinessBtn.addEventListener("click", addBusiness)
function addBusiness() {
   
  if (businessForm.style.display == "none") {
  
     businessForm.style.display = "block";
      
  } else {
    businessForm.style.display = "none"
   
 }
}
//event listener needs review
