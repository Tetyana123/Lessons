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

  
  const square = function (number) {
    return number * number;
  };
  const x = square(5)
  console.log(x);