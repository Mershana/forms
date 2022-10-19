'use strict'

// Атрибут disabled в JavaScript
/* В HTML существуют специальные атрибуты без значений, например, атрибут disabled, используемый для блокировки элементов. Для того, чтобы установить такой атрибут, соответствующему свойству требуется присвоить значение true, а чтобы убрать - значение false. */
/* №1⊗jsPmFmDsb
Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function(){
	elem.disabled = false;
}) */

// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
/* let elem = document.querySelector('#elem');
let undblock = document.querySelector('button[name=undblock]');
let block = document.querySelector('button[name=block]');

undblock.addEventListener('click', function(){
	elem.disabled = false;
})

block.addEventListener('click', function(){
	elem.disabled = true;
}) */

/* №3⊗jsPmFmDsb
Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('button'); */
/* let elem = document.querySelector('#elem');
let undblock = document.querySelector('button[name=undblock]');
let block = document.querySelector('button[name=block]');
let paragraph = document.querySelector('p');

undblock.addEventListener('click', function(){
	elem.disabled = false;
	if (elem.disabled === false){
		paragraph.textContent = 'Разблокирован';
	}
		});

		block.addEventListener('click', function(){
			elem.disabled = true;
			if (paragraph.textContent = 'Заблокирован');
		});
 */

		