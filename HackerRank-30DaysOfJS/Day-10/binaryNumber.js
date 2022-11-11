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



function main() {
    const n = parseInt(readLine().trim(), 10);
let num = n.toString(2);
let arr = [];
let c = 0;

for (let i = 0; i <= num.length; i++) {
  if (num[i] == 1) {
    c++;
    arr.push(c)
  }
  else if(num[i] == 0) {
    c = 0;
  }
}
// console.log(arr)

let max = Math.max(...arr)
console.log(max)

}
