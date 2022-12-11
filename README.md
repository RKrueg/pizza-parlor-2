```
Describe: Pizza();

Test: "It should create a pizza object with toppings and size as properties"
Code: const myPizza = new Pizza(["bacon"], "large");
Expected Output: Pizza { toppings: ["bacon"], size: "large" }

Describe: Pizza.prototype.pizzaSizePrice = function ()

Test: "It should return a price for the pizza based on the size"
Code: myPizza.pizzaCostSize();
Expected Output: 10

Describe: Pizza.prototype.pizzaToppingsPrice = function ()

Test: "It should return a price based on the toppings chosen"
Code: myPizza.pizzaCostToppings();
Expected Output: 1

Describe: Pizza.prototype.pizzaTotal = function ()

Test: "It should add the sizePrice and toppingsPrice together to give a total cost"
Code: myPizza.pizzaTotal();
Expected Output: 11
