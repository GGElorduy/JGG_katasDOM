/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.
 */
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const albums2 = ['pepe', 'juan', 'meñique', 'dedo del pie gordo', '()9438u435']
const listenetor = (catalogo) => {
  const list = document.createElement('ul')

  for (let index = 0; index < catalogo.length; index++) {
    const element = catalogo[index]
    const item = document.createElement('li')
    item.textContent = element
    list.appendChild(item)
  }
  document.body.appendChild(list)
}

listenetor(albums)
listenetor(albums2)
