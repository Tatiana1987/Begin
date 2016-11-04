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


    if (isCorrectTriangle(a, b, c)) {
        console.log("Треугольник не существует");
        return;
    }

    p = (a + b + c) / 2;
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("Площадь треугольника = " + s);
}

function isNumber(a) {
    return typeof a === "number";
}

function isCorrectTriangle(a, b, c) {
    isCorrectEdge(a, b, c) ||
    isCorrectEdge(a, c, b) ||
    isCorrectEdge(b, c, a))
}

function isCorrectEdge(a, b, c) {
    return (a + b) < c;
}

