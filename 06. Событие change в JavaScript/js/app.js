'use strict'

// Событие change в JavaScript
/* №1⊗jsPmFmOch
Дан инпут и абзац. По изменению инпута выведите его текст в абзац. */
/* let elems = document.querySelector('#elem');
let paragraph = document.querySelector('p');

elems.addEventListener('change', function(){
	paragraph.textContent = this.value;
}) */

/* №2⊗jsPmFmOch
Дан чекбокс. По изменению чебокса выведите на экран его новое состояние. */
/* let elems = document.querySelector('#elem');
elems.addEventListener('change', function(){
	console.log(this.value);
}) */

/* №3⊗jsPmFmOch
Расскажите, в чем разница между событиями blur и change. */
/* Событие change происходит, когда поля формы теряют фокус и их значения изменяются. onblur - срабатывает при расфокусировке поля. */

/* №4⊗jsPmFmOch
Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный. */
let elems = document.querySelector('#elem');
elems.addEventListener('change', function(){
	if (elems.value.length <= 5){
		elems.style.border = '3px solid green' ;
	} else if (elems.value.length >= 5){
		elems.style.border = '3px solid red';
	}
})