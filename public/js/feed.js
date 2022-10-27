const deleteBtn = document.querySelectorAll("#del")
const editBtn = document.querySelectorAll("#edit");
const testBtn = document.querySelector("#test").style.display = "none"

//testBtn.addEventListener("click", function (e) {
 // console.log("hey that is a button!")
//})

/*Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', function (e) {
    const deleteCard = this.parentNode.dataset.id
    
    try {
      const response = await fetch(`posts/deletePost`, {
        method: 'delete', 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          'todoIdFromJSFile': ingredientId
        })
      })
      const data = await response.json()
      console.log(data)
      location.reload()
    } catch (err) {
      console.log(err)
    }
    })
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
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
 
}*/