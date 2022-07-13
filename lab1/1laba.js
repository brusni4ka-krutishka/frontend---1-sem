function one() {
	alert("Вас приветствует учебный центр!");
	let x = prompt("Введите ваше имя: ");
	alert("Добро пожаловать на наши курсы!, " + x);
	let y = confirm("Хотите стать Web-дизайнером?");
	if (y) {
		alert("Учите стили CSS и JavaScript");
	} else {
		alert("Упускаете время!");
	}
}
function two() {
	let a = 5;
	let b = 10;
	let c = "чо это";
	let d = "а ничо";
	document.write(" число + число = " + (5 + 10));
	document.write("</br>");
	document.write("строка + строка = " + (c + d) + " или " + c + d);
	document.write("</br>");
	document.write("число + строка = " + (a + c));
	document.write("</br>");
	document.write("строка + число = " + d + b);
	document.write("</br>");
	alert("Результатом сложения числа и строки всегда будет строка");
}
function three() {
	let x = prompt("Введите первое число: ");
	let y = prompt("Введите второе число: ");
	let result1 = (35 * y - 25 * x) / 5 + 232;
	let result2 = ((8 * y) / x + (5 * x) / y - 43) * 6;
	document.write(result1 + "%" + result2 + "=" + (result1 % result2));
	alert(result1 + "%" + result2 + "=" + (result1 % result2));
}
function four() {
	let number = prompt("Введите число: ");
	if (number < 20 && number != 15 && number % 5 == 0) {
		alert("Правильное значение!");
	} else {
		alert("Неправильное значение.");
	}
}
function five() {
	let A = Number(prompt("Введите первое число: "));
	let B = Number(prompt("Введите второе число: "));
	if (A > B) {
		alert("A больше В");
	} else if (A <= B) {
		alert("А меньше или равно В");
	}
	document.write(A == B ? "A равно В" : "A не равно В");
}
function six() {
	let Day = Number(prompt("Введите число: "));
	switch (Day) {
		case 1:
			alert("Понедельник");
			break;
		case 2:
			alert("Вторник");
			break;
		case 3:
			alert("Среда");
			break;
		case 4:
			alert("Четверг");
			break;
		case 5:
			alert("Пятница");
			break;
		case 6:
			alert("Суббота");
			break;
		case 7:
			alert("Воскресенье");
			break;
	}
}
