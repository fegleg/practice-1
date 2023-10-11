//object = { property : value }

const obj1 = {
  prop1: 5,
  prop2: 10,
};
const obj2 = {
  prop1: 5,
  prop2: 10,
};
const key = "prop2";

console.log(typeof obj1);
console.log(typeof key);
console.log(obj1 === obj1);


// const obj2 = obj1;
// console.log(obj1 === obj2);  sad je true

console.log(obj1.prop1);
console.log(obj1.key);
console.log(obj1[key]);

console.log(Object.keys(obj1), Object.values(obj1));

const num = 500;

console.log(num.toString());

// Coercion
console.log(5 == "5");
console.log(5 == 5);
console.log(5 === "5");
