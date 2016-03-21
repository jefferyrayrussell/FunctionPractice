/* Problem 1  sum() takes in two numbers as arguments and returns their sum*/

function sum (x,y) {
  var total = x + y;
  /*console.log('The sum of ' + x + ' and ' + y + ' is ' + total);*/
};

/* Problem 2  multiply() takes in two numbers as arguments and returns their product*/

function multiply (x,y) {
  var total = x * y;
    /*console.log('The product of ' + x + ' and ' + y + ' is ' + total);*/
};

/* Problem 3  sumAndMultiply() takes in three numbers as an argument and by using the above sum() and multiply() returns two values in an array; namely the sum and the prod*/

function sumAndMultiply (x,y,z) {
  var a = sum((x + y),z);
  var b = multiply((x * y),z);
  console.log(x,y,z);
  console.log(x + ' and ' + y + ' and ' + z + ' sum to ' + a);
  console.log('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + b);
  return [a,b];
};
