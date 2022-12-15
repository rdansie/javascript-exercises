const reverseString = function(string) {
    let myArray = string.split("");
    myArray.reverse();
    myArray.toString();
    return myArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
