let pizzaPlace= "Jakes Pizza Den";
let numberOfToppings = 25;
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log("Welcome to " + pizzaPlace + ", where we offer " + numberOfToppings + " different toppings!");

if (numberOfToppings < 10){
    console.log("Quality, not quantity.");
} else {
    console.log("A whole lot of pizza.");
}

//BONUS CHALLENGE

for (let i = 1; i <= 25; i++){
    console.log(i);
}