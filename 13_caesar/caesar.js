const caesar = function(string1, val2) {
    var stringHold = "";
    for(i=0;i<string1.length;i++){
        if((string1[i].charCodeAt()>=65 && string1[i].charCodeAt()<=90) ||(string1[i].charCodeAt()>=97 && string1[i].charCodeAt()<=122)){
            if(string1[i].toUpperCase() === string1[i]){
                //convert caps unicode shift
                stringConv = String.fromCharCode(string1[i].charCodeAt()+val2%26);
                if(stringConv.charCodeAt()< 65){
                    stringConv = String.fromCharCode(91-(65-stringConv.charCodeAt()));
                    stringHold = stringHold +stringConv ;
                }
                else if(stringConv.charCodeAt()> 90){
                    stringConv = String.fromCharCode(64+(stringConv.charCodeAt()-90));
                    stringHold = stringHold +stringConv;
                }
                else{
                    stringHold = stringHold + stringConv;
                }
            }
            else{
                //convert lowercase unicode shift
                stringConv = String.fromCharCode(string1[i].charCodeAt()+val2%26);
                if(stringConv.charCodeAt()<97){
                    stringConv = String.fromCharCode(123-(97-stringConv.charCodeAt()));
                    stringHold = stringHold + stringConv;
                    
                }
                else if(stringConv.charCodeAt()>122){
                    stringConv = String.fromCharCode(96+(stringConv.charCodeAt()-122));
                    stringHold = stringHold + stringConv;
    
                }
                else{
                    stringHold = stringHold + stringConv;
                } 

            }
        }
        else{
            stringHold = stringHold + string1[i];
        }
    }
    return stringHold
};

// Do not edit below this line
module.exports = caesar;
