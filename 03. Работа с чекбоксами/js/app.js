'use strict'

// Работа с чекбоксами в JavaScript
/* №1⊗jsPmFmChb
Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное. */
/* let elems = document.querySelector('#elem');
let checkedState = document.querySelector('#marked_state');
let uncheckedState = document.querySelector('#unchecked_state');

checkedState.addEventListener('click', function(){
	elems.checked = true;
});

uncheckedState.addEventListener('click', function(){
	elems.checked = false;
}); */

/* №2⊗jsPmFmChb
Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'. */
/* let elems = document.querySelector('#elems');
let button = document.querySelector('button');
let paragraph = document.querySelector('p');

button.addEventListener('click', statusCheck);

function statusCheck()	{
	if (elems.checked == true){
		paragraph.textContent = 'привет';
	} else {
		paragraph.textContent = 'пока';
	}
} */


