function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalBill = 0;
}

Pizza.prototype.pizzaSizePrice = function () {
  if (this.size === "small") {
    this.sizePrice += 5;
  } else if (this.size === "medium") {
    this.sizePrice += 7;
  } else if (this.size === "large") {
    this.sizePrice += 10;
  }
  return this.sizePrice;
}

Pizza.prototype.pizzaToppingsPrice = function () {
  if (this.toppings === "bacon") {
    this.toppingPrice += 1;
  } else if (this.toppings === "ham") {
    this.toppingPrice += 2;
  } else if (this.toppings === "pineapple") {
    this.toppingPrice +=3;
  }
  return this.toppingPrice;
}

Pizza.prototype.pizzaTotal = function () {
  this.totalBill = this.toppingPrice + this.sizePrice;
  return this.totalBill;
}