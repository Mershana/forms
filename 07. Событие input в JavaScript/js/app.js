'use strict'

// Событие input в JavaScript
/* №1⊗jsPmFmOin
Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('input', function(){
	if (elem.value.length > 5){
		alert('длина текста достигает 5-ти символов');
	}
}) */

// №2⊗jsPmFmOin
// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
/* let elems = document.querySelector('#elem');
let paragraph1 = document.querySelector('#p1');
let paragraph2 = document.querySelector('#p2');
const threshold = 5;

elems.addEventListener('input', function(){
	if (elems.value.length <= threshold){
		paragraph1.textContent = elems.value.length
	}
	if (elems.value.length >= threshold){
		paragraph2.textContent =   'превышена длина текста на :' + (elems.value.length - threshold)
	}
}); */


/* let elems = document.querySelector('#elem');
let paragraph = document.querySelector('p');
const threshold = 5;
elems.addEventListener('input', function(check){
    if (check.target.value.length > threshold){
        paragraph.textContent = 'превышены длина текста на  ' + (check.target.value.length-threshold);
    } else {
        paragraph.textContent = check.target.value.length;
    }
});
 */
