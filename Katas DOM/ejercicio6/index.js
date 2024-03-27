// Selecciona el elemento con la clase .fn-remove-me y lo elimina
const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
  elementToRemove.remove()
} else {
  console.log('No se encontró ningún elemento con la clase .fn-remove-me')
}
