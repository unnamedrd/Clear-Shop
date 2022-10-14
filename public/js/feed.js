const deleteBtn = document.querySelectorAll(".del")

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteItem)
})

function deleteItem(){
  console.log("you clicked something")
}