function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
  this.pizzaPrice = 0;
}

Pizza.prototype.pizzaCostSize = function () {
  if (this.size === "small") {
    this.pizzaPrice += 5;
  } else if (this.size === "medium") {
    this.pizzaPrice += 7;
  } else if (this.size === "large") {
    this.pizzaPrice += 10;
  }
  return this.pizzaPrice;
}