const greet = "Hello Students, Welcome to the second week!";
console.log(greet);

console.log(greet.replace("second", "2nd"));
console.log(greet);

const students = "Students";
const index = greet.indexOf(students);

console.log("The index of the word students is " + index);

console.log(`The length of the string is ${greet.length}`);

console.log("This story is\n" + "very long");
console.log(`This story is
very long`);

const viewerCount = 50 * 2;
console.log("The viewer count is " + viewerCount);
console.log(`The viewer count is + ${viewerCount}`);
console.log(`${viewerCount > 1 ? "great" : "not great"}`);


let viewers = 10;
console.log((viewers += 1));

const pizzas = ["Kebab", "Banana Curry", "Hawaiian"];

const pizza = {
    name: "Banna Pineapple",
    slices: 6,
    isVeg: false,
  };

  console.log(pizza.name);
  console.log(pizza);
  console.log(pizzas);


  let i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);

  
  const square = function (number) {
    return number * number;
  };
  const x = square(5)
  console.log(x);

  function foo(i) {
    if (i < 0) {
      return;
    }
    console.log(`begin: ${i}`);
    foo(i - 1);
    console.log(`end: ${i}`);
  }
  foo(3);


  function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); 