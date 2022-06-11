const reverseString = function(input)
{
    stringHolder = "";
    for(i=0;i<input.length;i++){
        stringHolder = stringHolder + input[input.length-i-1];
    }
    return stringHolder
}
const palindromes = function (input) {
input = input.replace(/[^a-z]/gi,"");
//console.log(input)
input = input.replace(/\s/g,"");
input = input.toLowerCase();
if(input == reverseString(input)){
    return true
}
else{
    return false
}
};

// Do not edit below this line
module.exports = palindromes;
