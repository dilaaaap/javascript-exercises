const reverseString = function(input) {
    var stringHold = "";
    for(i=0;i<input.length;i++){
        stringHold = stringHold + input[input.length-i-1];
    }
    return stringHold
};

// Do not edit below this line
module.exports = reverseString;
