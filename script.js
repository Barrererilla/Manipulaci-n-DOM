const title = document.querySelector('h1');
const input_1 = document.querySelector('#calculo_1');
const input_2 = document.querySelector('#calculo_2');
const boton = document.querySelector('#botoncito');
const parrafo = document.querySelector('#parrafito');
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', mostrarResultado);

function mostrarResultado(event){
	event.preventDefault();
	console.log(event);
	const resultadoSuma = parseInt(input_1.value) + parseInt(input_2.value);
	parrafo.innerHTML = 'El resultado de tu operación es: ' + resultadoSuma;
}


