const add = function(val1,val2) {
  let a = val1+val2;
  return a;
};

const subtract = function(val1,val2) {
	let a = val1-val2;
  return a;
};

const sum = function(input) {
	let a = 0;
  if(input.length == 0){
    a = 0;
  }
  else{
    for(i=0;i<input.length;i++){
      a = a + input[i];
    }
  }
  return a;
};

const multiply = function(input) {
  let a = 0;
  if(input.length == 0){
    a = 0;
  }
  else{
    a = 1;
    for(i=0;i<input.length;i++){
      a = a * input[i];
    }
  }
  return a;
};

const power = function(val1,val2) {
	ans = val1**val2;
  return ans;
};

const factorial = function(val) {
  a = val;
  if(val == 0){
    a=1;
    return a
  }
  else{
    for(i=val-1; i>0; i--){
      a = a*i;
    }
  return a;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
