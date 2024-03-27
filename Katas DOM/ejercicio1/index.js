/* 
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". 
*/
/* 1.1 */
console.log(document.querySelector('.showme'))
/* 1.2 */
console.log(document.querySelector('#pillado'))
/* 1.3 */
const powerRanger = document.querySelectorAll('p')
powerRanger.forEach((power) => {
  console.log(power)
})
/* 1.4 */
const pokemon = document.querySelectorAll('.pokemon')
pokemon.forEach((poke) => {
  console.log(poke)
})
/* 1.5 */
const data = document.querySelectorAll('[data-function="testMe"]')
data.forEach((element) => console.log(element))
/* 1.6 */
console.log(data[2])
