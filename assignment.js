
// kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Please use positive number"
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}
var meterFind = kilometerToMeter(5);
console.log(meterFind);


//budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return "Watch"
    }
    else if (phone < 0) {
        return "Phone"
    }
    else if (laptop < 0) {
        return "Laptop"
    }
    else {
        var total = (watch * 50) + (phone * 100) + (laptop * 500);
    }
    return total;
}
var result = budgetCalculator(1, 3, 1);
console.log(result);


// hotelCost

function hotelCost(time) {
    var cost = 0;
    if (time < 0) {
        return "Time can't be Negative."
    }
    // 10 days in hotelCost.
    else if (time <= 10) {
        cost = time * 100;
    }
    //  20 days in hotelCost.
    else if (time <= 20) {
        var firstStay = 10 * 100;
        var hotelTime = time - 10;
        var secondStay = hotelTime * 80;
        cost = firstStay + secondStay;
    }
    // 21 days or extra days in hotelCost.
    else {
        var firstStay = 10 * 100;
        var secondStay = 10 * 80;
        var hotelTime = time - 20;
        var thirdStay = hotelTime * 50;
        cost = firstStay + secondStay + thirdStay;
    }
    return cost;
}
var result = hotelCost(20);
console.log(result);


// megaFriend
function megaFriend(name) {
    var friendName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (name[i] == 0) {
            return "input name"
        }
        else if (element.length > friendName.length) {
            friendName = element;
        }
    }
    return friendName;
}
var result = ['Tanjumurrahman', 'Rahim', 'Karim', 'Tahrim', 'Ramim'];
console.log(megaFriend(result));
