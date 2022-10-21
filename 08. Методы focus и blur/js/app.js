'use strict'

// Методы focus и blur в JavaScript

/* №1⊗jsPmFmFB
Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался. */
/* let [elemOneFocus, elemTwoFocus] = [...document.querySelectorAll('input')];
function maxLength(event){
	if (!event.target.value || event.target.value.length < 2) return;
	switch (event.target){
		case elemOneFocus: elemTwoFocus.focus(); break;
		case elemTwoFocus: elemTwoFocus.blur();
	}
}
[elemOneFocus, elemTwoFocus].forEach(elem => elem.addEventListener('input', maxLength)); */