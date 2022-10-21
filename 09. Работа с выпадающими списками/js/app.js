"use strict";

// Работа с выпадающими списками в JavaScript

/* №1⊗jsPmFmDL
Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац. */
/* let select = document.querySelector('#select');
let elems = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	elems.textContent = select.value;
}); */

// №2⊗jsPmFmDL
// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
/* let select = document.querySelector('#select');
let paragraph = document.querySelector('p');
let four = 4;

	select.addEventListener('change', function(){
		if (((select.value % 4 == 0) && (select.value % 100 != 0)) || (select % 400 == 0)){
			console.log('год високосный');
		} else {
			console.log('обычный год');
		}		
}); */

// Атрибут value

/* №3⊗jsPmFmDL
Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий. */
/* let select = document.querySelector("#select");
let elem = document.querySelector('#elem');

select.addEventListener("click", function () {
  if (select.value >= 1 && select.value <= 5) {
    elem.textContent = ("сегодня рабочий день");
  } else if (select.value == 6 || select.value == 7) {
    elem.textContent = ("сегодня выходной день");
  }
}); */


