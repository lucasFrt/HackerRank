'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let index = 0; index < n; index++) {
        if (index%3 === 0 && index % 5 === 0) {
            console.log('Fizzbuzz')
        } else if (index%3 === 0 && index % 5 > 0) {
            console.log('Buzz');
            
        } else if (index%5 === 0 && index % 3 > 0) {
            console.log('Fizz');
            
        } else if (index % 3 > 0 && index % 5 > 0) {
            console.log(index)
        }
        
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
main()
