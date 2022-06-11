const repeatString = function(input,value) 
{
    if(value>=0)
    {
        let stringHold = "";
        for(i = 0;i<value;i++)
        {
            stringHold = stringHold + input;
        }
    return stringHold;
    }
    else
    {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = repeatString;
