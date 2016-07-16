var fibFinder = function(value){
  var firstNum = 1; //first number
  var secondNum = 0; //second number
  var nextNum = 0; //next number in sequence
  var sum = 0; //sum of even number in fib sequence

  while(nextNum <= value){
    nextNum = secondNum + firstNum; //add first number and second number to get next number in fibonacci sequence - starts with 1
    if(nextNum % 2 === 0){
      //test to see if nextNum is even. If so add to sum variable
      sum += nextNum;
    }
    //increment the sequence
    secondNum = firstNum //assign first number to second number variable
    firstNum = nextNum; //assign the next number to first number variable
  }

  return sum;
};

console.log(fibFinder(4000000))
