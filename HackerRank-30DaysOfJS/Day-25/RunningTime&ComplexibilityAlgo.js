function processData(input) {
    //Enter your code here
    let arr = input.split('\n');
    for (let i = 1; i < arr.length; i++) {
        var n = arr[i];
        if (isPrime(n)) {
            console.log("Prime");
        } else {
            console.log("Not prime");
        }
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }

    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }

    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
