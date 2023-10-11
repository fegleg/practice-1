// Global scope

// Function definition
function myFun(funArg, funArg2) {
  // myFun function scope
  const funVariable = "test";

  console.log({ globalVariable, funArg, funArg2 });

  /* function childFun() {
    console.log(funVariable, globalVariable);
  }

  childFun(); */
}

function fact(num) {
  let sum;

  for (sum = 1; num > 1; num--) {
    sum *= num;
  }

  return sum;
}

console.log("Result", fact(5) * fact(10));
//console.log(funVariable);

const globalVariable = 10;

if (true) {
  let myFirstVariable = 5;

  myFirstVariable = 1;

  console.log(myFirstVariable);
}

//Function invocation
myFun("hello");
