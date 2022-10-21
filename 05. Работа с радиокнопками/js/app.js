'use strict'

// Работа с радиокнопками в JavaScript

/* №1⊗jsPmFmRd
Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки. */
let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('button');
let elems = document.querySelector('p')

/* button.addEventListener('click', function(){
	for (let radio of radios) {
		if (radio.checked){
			elems.textContent = radio.value
		}
	}
}); */

