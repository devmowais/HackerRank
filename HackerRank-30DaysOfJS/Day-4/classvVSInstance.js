process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    var age = initialAge;
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if (age < 13 && age > -1)
          console.log("You are young.");
      else if (age < 18 && age > 12)
          console.log("You are a teenager.");
      else if (age > 17)
          console.log("You are old.");
      else
          {
              console.log("Age is not valid, setting age to 0.")
              age = 0;
              this.amIOld();
          }

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       age ++;
   };
}

function main() {