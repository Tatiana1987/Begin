$(function() {
	
	BodyMassIndex(58,1.64);
});	

function BodyMassIndex(m, h) {

var BMI;

if (!(isNumber(m) && isNumber(h))) {
	console.log("Все параметры должны быть числами");
	return;
}	

if (h>3) {
	console.log("Рост должен быть указан в метрах");
	return;
}	

BMI = m / (h * h);

if (BMI > 5 && BMI <= 16) {
	console.log("Индекс массы тела = "  + BMI);
	console.log("Выраженный дефицит массы тела");
} else if (BMI > 16 && BMI <= 18.5) {
	console.log("Индекс массы тела = "  + BMI);
	console.log("Недостаточная (дефицит) масса тела");
} else if (BMI > 18.5 && BMI <= 25) {
	console.log("Индекс массы тела = "  + BMI);
	console.log("Норма");	
} else if (BMI > 25 && BMI <= 30) {
	console.log("Индекс массы тела = "  + BMI);
	console.log("Избыточная масса тела (предожирение)");
} else if(BMI > 30 && BMI <= 250) {
	console.log("Индекс массы тела = "  + BMI);
	console.log("Ожирение");
}	else {
	console.log("Введены неверные параметры");
}

}

function isNumber(a) {
	return typeof a === "number";
}
