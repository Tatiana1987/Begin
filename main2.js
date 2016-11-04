$(function() {
	
	triangleSquare(7, 8, 10);
});	

function triangleSquare(a, b, c) {

var p, s;

if (!(isNumber(a) && isNumber(b) && isNumber(c))) {
	console.log("Все параметры должны быть числами");
	return;
}

if (a <= 0 || b <= 0 || c <= 0) {
	console.log("Все параметры должны быть положительными");
	return;
}  


if ((a + b) < c || (a + c) < b || (b + c) < a) {
	console.log("Треугольник не существует");
	return;	
}

p = (a + b + c) / 2;
s = Math.sqrt(p*(p - a)*(p - b)*(p - c)); 
console.log("Площадь треугольника = " + s);
}

function isNumber(a) {
	return typeof a === "number";
}
