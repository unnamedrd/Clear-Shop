const deleteBtn = document.querySelectorAll(".del")

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteItem)
})

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
    location.reload()
  } catch (err) {
    console.log(err)
  }
 
}