"use strict";

// Поиск ошибок в коде с формами в JavaScript
/* №1⊗jsPmFmMst
По потери фокуса текст из textarea должен записаться в див:
<textarea></textarea>
<div></div>
let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.textContent;
}); */

/////////////////
/* let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.textContent;
}); */
/* 


№2⊗jsPmFmMst
По клику на кнопку в див должно записаться или одно, или другое значение:
<input type="checkbox">
<div></div>
<button>button</button>
let checkbox = document.querySelectorAll('#checkbox');
let button = document.querySelectorAll('#button');
let div = document.querySelectorAll('#div');

btn.addEventListener('click', function() {
	if (checkbox.checked) {
		div.value = '111';
	} else {
		div.value = '222';
	}
}); */

/////////////////////////////
/* let checkbox = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function() {
	if (checkbox.checked) {
		div.textContent = ' 111';
	} else {
		div.textContent = ' 222';
	}
}); */

/* №3⊗jsPmFmMst
По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
<input type="checkbox">
<button>button</button>
let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	if (checkbox.checked = true) {
		console.log('+++');
	} else {
		console.log('---');
	}
}); */
////////////////////
let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector("button");

button.addEventListener("click", function () {
  if (checkbox.checked === true) {
    console.log("+++");
  } else {
    console.log("---");
  }
});
