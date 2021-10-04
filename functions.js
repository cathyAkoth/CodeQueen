// Function that console logs name and age.
function printName(myName, age) {
    console.log(myName, age);
}
printName("Cathy", 1)
printName("Jessy", 2)
printName("Kate", 3)
printName("Prossy",4)
printName("John", 5)

// Function that takes another function as a parameter.

function trial(a, b, num){
    //Calling argument as a function.
    return num(a, b);
  }
  
  // Function to add two numbers 
  function add(c, d){
    return c + d;
  }
  // Passing the "add" function like a regular argument
  let result = trial(1, 2, add);
  
  console.log(result);

//Arrow function
  let sum = (x, y) => x + y;
  console.log (sum(3,5));

// Loop that prints "I love uganda" 19 times
for (let num = 1; num < 20; num++) {
    
    console.log("I love Uganda",num)   
}



