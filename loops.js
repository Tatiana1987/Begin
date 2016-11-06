$(function() {
    var amount = 5, days = 1000, interest = 0.5;
    console.log(amount +
        " in " + days +
        " days is " +
        saving(amount, interest, days));
});

function saving(amount, interest, days) {
    var k = (1 + interest/100);
    var _days = days;

    while (days > 0) {
        amount = amount * k;
        days = days - 1;
        if(amount > 10) {
            console.log("Day is " + (_days - days));
            break;
        }
    }

    return amount;
}

function factorial(n) {
    var factorial = 1;
    var i = 2;

    while(i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
}

function factorial2(n) {
    var factorial = 1;

    // 5! = 1 * 2 * 3 * 4 * 5
    for(var i = 2 ; i <= n ; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
