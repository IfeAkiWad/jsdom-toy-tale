let addToy = false;
// const toyCollection = document.querySelector('#toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toys => {
    console.log(toys)
    toys.forEach(toy => 
    renderToys(toy)
    // toys.forEach(toy => toyCollection.appendChild(toyCard) )
    )
})
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  

});

function renderToys(toy) {
  let h2 = document.createElement('h2')
    h2.innerHTML = `${toy.name}`
  let toyImage = document.createElement('img')
    toyImage.setAttribute('src', toy.image)
    toyImage.setAttribute('class', 'toy-avatar')
  let p = document.createElement('p')
    p.innerHTML = `${toy.likes}`
  let button = document.createElement('button')
    button.setAttribute('class', 'like-btn')
    button.setAttribute('id', toy.id)
    button.innerHTML = 'Like ❤️'
    button.addEventListener('click', (event) => {
      likes(event)
    })

    let toyCardDiv = document.createElement('div')
    toyCardDiv.setAttribute('class', 'card')
    toyCardDiv.append(h2, toyImage, p, button)

    let toyCollection = document.getElementById('toy-collection')
      toyCollection.appendChild(toyCardDiv)
}

function likes() {
  let button = document.getElementsByClassName('like-btn')
    button.addEventListener('click', (event) => {
      event.preventDefault()
      console.log('Hey')
    })
}