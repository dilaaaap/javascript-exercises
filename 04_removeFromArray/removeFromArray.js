const removeFromArray = function() {
    arrHold = arguments[0];
    
    for(j=arguments.length-1;j>0;j--){
         
        for(i = 0;i<arrHold.length;i++){
             
            if(arrHold[i] === arguments[j]){
                
                arrHold.splice(i,1);
                } 
            }
        }
    return arrHold
};

// Do not edit below this line
module.exports = removeFromArray;
