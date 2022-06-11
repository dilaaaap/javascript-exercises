const leapYears = function(input) {
    if(input%4 == 0 && input>=0 && input%100 != 0){
        return true
    }
    else if(input%400 == 0){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
