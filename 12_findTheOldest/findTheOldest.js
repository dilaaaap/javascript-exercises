const findTheOldest = function(input) {
    a =[];
    const currentYear = new Date().getFullYear();
    for(i=0; i<input.length;i++){
        if("yearOfDeath" in input[i]){
            a[i] = input[i].yearOfDeath - input[i].yearOfBirth;

        }
        else{
            a[i] = currentYear - input[i].yearOfBirth;
        }
    }
    holder = Math.max(...a);
    ans = a.indexOf(holder);
    return input[ans]
};

// Do not edit below this line
module.exports = findTheOldest;
