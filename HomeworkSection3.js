// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["cheese, ", "pepperoni, ", "sausage, ", "bacon"];
console.log(pizzaToppings);


// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(){
  let message = "Welcome to Pizza House, our toppings are: ";
  for (let name of pizzaToppings){
    message += `${name}`;
  }
  console.log(message);
}
greetCustomer();


// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings){
    let message = `One ${size} ${crust} crust pizza with`
    for (let name of toppings){
        message += `${name}, `
}
console.log(`${message} coming up!`);
return [size, crust, toppings]
}


getPizzaOrder("large", "thin", "cheese, ", "pepperoni, ", "sausage, ", "bacon")


// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings


function preparePizza([orderSize, orderCrust, orderToppings]){
    let cooking = "Your pizza is in the oven"
    console.log(cooking);
    return {
        size: orderSize
        crust: orderCrust
        toppings: orderToppings
    };
}
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.

