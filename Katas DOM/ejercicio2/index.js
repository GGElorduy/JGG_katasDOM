/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */
const divUno = document.createElement('div')
document.body.appendChild(divUno)
/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.  */
const divDos = document.createElement('div')
const p = document.createElement('p')
divDos.appendChild(p)
document.body.appendChild(divDos)

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
const divTres = document.createElement('div')

for (let index = 0; index <= 5; index++) {
  const pTres = document.createElement('p')
  divTres.appendChild(pTres)
}
document.body.appendChild(divTres)
/* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */

const pCuatro = document.createElement('p')
pCuatro.textContent = 'Soy dinámico!'
document.body.appendChild(pCuatro)

/* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const waba = document.querySelector('.fn-insert-here')
waba.textContent = 'Wubba Lubba dub dub'
/* 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

let rem = document.querySelectorAll('.fn-remove-me')
rem.forEach((element) => {
  element.remove()
})
/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild. */

const pOcho = document.createElement('p')
pOcho.textContent = 'Voy en medio!'
const divOcho = document.querySelectorAll('div.fn-insert-here')

document.body.insertBefore(pOcho, divOcho[1])
/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
divOcho.forEach((element) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  element.appendChild(p)
})
