'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
    }

}

//Write Your CODE

function main() {
    let n = parseInt(readLine());
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(readLine());

    let email = arr.filter(function (e) {
        return (e.includes("@gmail.com"))
    });
    email.sort();
    let fNames = email.map(function (e) {
        return (e.slice(0, e.indexOf(' ')))
    });

    fNames.forEach(function (name) {
        console.log(name);
    })

}
