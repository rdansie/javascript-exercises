const removeFromArray = function(array, num) {
    //loop through elements of Array
    for (element of array) {
        //if it matches the function argument, delete it from the array
        if (element === num) {
            let index = array.indexOf(element);
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


//turn arguments into array using Array.from()


//then run previous function through all elements of arguments array except the 1st