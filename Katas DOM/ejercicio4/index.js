/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

// 1.1 Añade un evento 'click' que ejecute un console log con la información del evento del click
const click = document.getElementById('btnToClick')
click.addEventListener('click', function (event) {
  console.log('Información del evento de clic:', event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.querySelector('.focus').addEventListener('focus', function () {
  console.log('Valor del input en focus:', this.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.querySelector('.value').addEventListener('input', function () {
  console.log('Valor del input:', this.value)
})
