'use strict'

// Работа с пунктами выпадающего списка на JavaScript
/* let select = document.querySelector('#select');
for (let option of select){
	if (option.value == [0]){
		option.text += ' !';
	} else {
		option.text += ' ?';
	}
} */

// Выбор пункта списка
/* let select = document.querySelector('#select');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	let option = select[6];
	option.selected = true;
}) */


// Получение выбранного оптиона
/* №3⊗jsPmFmDLIO
Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка. */
/* let select = document.querySelector('#select');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	let option = select[4];
	console.log(option.text);
}) */

// №4⊗jsPmFmDLIO
// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
let select = document.querySelector('#select');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	let option = select[4];
	(option.text += ' !');
}) 