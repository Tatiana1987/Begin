$(function() {
	
	Num1 (5);
});	


function isNumber(n) {
	return typeof n === "number";
}



function isPos(n) {
	if (n > 0) {
		return true;
	} else if (n < 0) {
		return false;
	}
}

function isEven(n) {
	if (n%2 ==0) {
		return true;
	} else {
		return false;
	} 
}

function Num1 (n) {
	
	if (!(isNumber(n))) {
	console.log("Параметр должен быть числом");
	return;
}	
	if (Number.isInteger(n) != true) {
		console.log("Число должно быть целым");
		return;
	}
	
	
	if ((n == 0)) {
		console.log("нулевое число");
	} else if((isPos(n) == true) && (isEven(n) == true)) {
		console.log("положительное четное число");
	} else if ((isPos(n) == true) && (isEven(n) == false)){
		console.log("положительное нечетное число");
	} else if ((isPos(n) == false) && (isEven(n) == false)){
		console.log("отрицательное нечетное число");
	} else if ((isPos(n) == false) && (isEven(n) == true)){
		console.log("отрицательное четное число");
	} 
		
}
