const fibonacci = function(input) {
    if(input==1 || parseInt(input) == 1){
        return 1
    }
    else if(input == 2 || parseInt(input) ==2){
        return 1
    }
    else if(input>1){
        return fibonacci(input-1)+fibonacci(input-2)
    }
    else if(parseInt(input)>1){
        holder = parseInt(input);
        return fibonacci(holder-1)+fibonacci(holder-2)
    }
    else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
