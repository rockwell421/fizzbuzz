//FizzBuzz exercise:
//Count from 1 to 100, if the number is divisible by 3, print 'Fizz', if it's divisible by 5, print'Buzz', if divisible by both, print 'FizzBuzz'

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
     console.log("Fizz");
     }

    else if (i % 5 === 0) {
     console.log("Buzz");
    }

    else {
        console.log(i);
        }
    }
}

//call fizzBuzz();
