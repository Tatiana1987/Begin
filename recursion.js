$(function() {
    var n = 5;
    console.log(n + "! = " +
        factorial(n));

    var a = [1, 2, 3, 4, 5];
    console.log("Sum of a is " + sum(a));
});

function doSum(a, i) {
    if(i < a.length) {
        return a[i] + doSum(a, i + 1);
    } else {
        return 0;
    }
}

function sum(a) {
    return doSum(a, 0);
}

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

