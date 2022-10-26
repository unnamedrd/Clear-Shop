const deleteBtn = document.querySelectorAll(".del")
const editBtn = document.querySelectorAll(".m-3 btn btn-primary edit");

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteItem)
})

Array.from(editBtn).forEach((el) => {
  el.addEventListener('click', editItem)
})

function editItem() {
  console.log("you clicked the edit button");
}
  


async function deleteItem() {
  console.log("you clicked something");
  const postId = this.parentNode.dataset.id
  try {
    const response = await fetch('posts/deletePost', {
      method: 'delete', 
      headers: { 'Content-type': 'application/json' }, 
      body: JSON.stringify({
        'id': postId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
 
}