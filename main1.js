$(function() {
	// ax^2+bx+c=0
	solve(2, 8, -192);
});	

function solve(a, b, c) {
		var d;
		var x1, x2;
		
	if(!(isNumber(a) && isNumber(b) && isNumber(c))) {
		console.log("All parameters must be numbers");
		return;
	}	
		
	// d = b^2 - 4ac
	d = b * b - 4 * a * c;
	
	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		console.log("x1 = " + x1);
		console.log("x2 = " + x2);
	} else if (d == 0) {
		x1 = -b / (2 * a);
		console.log("x1, x2 = " + x1);
	} else {	
		console.log("Действительных корней нет");
	}
}

function isNumber(a) {
	return typeof a === "number";
}
