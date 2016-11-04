$(function() {
    Num1 (1);
});

function isNumber(n) {
    return typeof n === "number";
}

function isPos(n) {
    return n > 0;
}

function isEven(n) {
    return n % 2 == 0;
}

function Num1 (n) {
    var result = "";

    if (!(isNumber(n))) {
        console.log("Параметр должен быть числом");
        return;
    }

    if (Number.isInteger(n) != true) {
        console.log("Число должно быть целым");
        return;
    }

    if (n == 0) {
        result = "нулевое";
    } else {
        if (isPos(n)) {
            result = result + "положительное ";
        } else {
            result = result + "отрицательное ";
        }

        if (isEven(n)) {
            result = result + "четное ";
        } else {
            result = result + "нечетное ";
        }
    }

    console.log("Число " + n);
    console.log(result + "число");
}
