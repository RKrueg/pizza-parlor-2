# _Pizza In The Garden_

#### By _**Ryan Krueger**_

#### _A simple page where a user can order pizza._

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

_The application allows users to place a custom order for pizza by checking one topping they would like on their pizza as well as what size of pizza they want. After hitting submit, their total price will be calculated based on the size and topping they chose. Then, their order will be placed on the screen._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _No known bugs at this time._

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _October 21, 2022_ _Ryan Krueger_
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

Describe: Pizza.prototype.fullOrder () 

Test: "It should string together the entire order"
Code: myPizza.fullOrder()
Expected Output: "Your toppings are: bacon and your size is: medium. Your total is: $11. Thank you!"
```
