const removeFromArray = function(array) {
    //Take arguments without the first array
    const newArg = [].slice.call(arguments, 1);
    //Iterate through elements of array
    for (let i = array.length - 1; i >= 0; i--) {
        //Iterate through elements of arguments
        for (let j = newArg.length; j >= 0; j--) {
            //If element matches argument then remove it from the array
            if (array[i] === newArg[j]) {
                array.splice(i,1);
            }
        }
    }
    return array;
    
};

removeFromArray([1,2,3,4],2,3);

// Do not edit below this line
module.exports = removeFromArray;
