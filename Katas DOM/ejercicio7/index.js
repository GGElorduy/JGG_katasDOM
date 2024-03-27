const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const div = document.querySelector('[data-function="printHere"]')
const ul = document.createElement('ul')
places.forEach((element) => {
  const elemento = document.createElement('li')
  elemento.textContent = element
  ul.appendChild(elemento)
})
div.appendChild(ul)
