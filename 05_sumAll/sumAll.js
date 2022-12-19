const sumAll = function(first, last) {
    let finalSum = 0;
    console.log(Number.isNaN(last));
    if (first < 0 || last < 0) {
        return "ERROR";
    } else if (typeof first != "number" || typeof last !=  "number") {
        return "ERROR";
    } else if (first < last) {
        for (i = last; i >= first; i--) {
            finalSum += i;
        }
        return finalSum;
    } else {
        for (i = first; i >= last; i--) {
            finalSum += i;
        }
        return finalSum;
    }

    
};

// Do not edit below this line
module.exports = sumAll;




//create variable to hold final sum
//loop through each number between and including the 2 given numbers
//for each number add it to the final sum variable