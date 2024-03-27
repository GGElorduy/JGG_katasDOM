/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countriesUno = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
countriesUno.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})
document.body.appendChild(ul)

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const dele = document.querySelector('.fn-remove-me')
dele.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divTres = document.querySelector('[data-function="printHere"]')
const ulTres = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulTres.appendChild(li)
})
divTres.appendChild(ulTres)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */
const countriesDos = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const createDivs = () => {
  countriesDos.forEach((element) => {
    const divCuatro = document.createElement('div')
    const titulo = document.createElement('h4')
    const imagen = document.createElement('img')
    const bton = document.createElement('button')

    divCuatro.appendChild(titulo)
    divCuatro.appendChild(imagen)
    divCuatro.appendChild(bton)

    bton.textContent = 'elimina este div'
    titulo.textContent = element.title
    imagen.src = element.imgUrl
    document.body.appendChild(divCuatro)
    bton.addEventListener('click', () => {
      divCuatro.remove()
    })
  })
}
createDivs()
/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */
const deleteDiv = () => {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  if (lastDiv) {
    lastDiv.remove()
  } else {
    alert('No hay más divs para eliminar.')
  }
}

const boton = document.createElement('button')
boton.textContent = 'Eliminador del ultimo div'
document.body.appendChild(boton)
boton.addEventListener('click', deleteDiv)
