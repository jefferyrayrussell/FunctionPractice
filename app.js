function sum(x, y) {
  var total = (x + y);
    /*console.log('The sum of ' + x + ' and ' + y + ' is ' + total);*/
  return x + y;
}

  /* Problem 2  multiply() takes in two numbers as arguments and returns their product*/

function multiply(x, y) {
  var total = (x * y);
    /*console.log('The product of ' + x + ' and ' + y + ' is ' + total);*/
  return x * y;
}

  /* Problem 3  sumAndMultiply() takes in three numbers as arguments and using the above functions returns their sum and product*/

function sumAndMultiply(x, y, z) {
  var sumOfThreeNumbers = sum(sum(x, y), z);
  var productOfThreeNumbers = multiply(multiply(x, y), z);
  console.log(x,y,z);
  console.log(x + ' and ' + y + ' and ' + z + ' sum to ' + sumOfThreeNumbers + '.');
  console.log('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + productOfThreeNumbers + '.');
  return [sumOfThreeNumbers, productOfThreeNumbers];
}

/* Problem 4  sumArray() takes in an array of numbers as a single argument and returns the sum of those numbers. */
function sumArray(arrayOfNumbers) {
  var currentSumOfArrayNumbers = 0;
    /* The function begins with the value zero and adds to it the value of each number in the array before proceeding to the next number. */
  for (var i = 0; i < arrayOfNumbers.length; i++){
    currentSumOfArrayNumbers += arrayOfNumbers[i];
  }
  console.table(arrayOfNumbers);
  console.log (arrayOfNumbers + ' was passed in as an array of numbers, and ' + currentSumOfArrayNumbers + ' is their sum.');
}

/* Problem 5  multiplyArray() takes in array of numbers as a single argument and returns the product of those numbers. */
function multiplyArray(arrayOfNumbers) {
    /* It is necessary to set the value of the variable below to 1 and not 0; if 0 this multiplication function would always return 0.*/
  var currentProductOfArrayNumbers = 1;
  for (var i = 0; i < arrayOfNumbers.length; i++){
    currentProductOfArrayNumbers *= arrayOfNumbers[i];
  }
  console.table(arrayOfNumbers);
  console.log('The numbers ' + arrayOfNumbers + ' have a product of ' + currentProductOfArrayNumbers + '.');
}
