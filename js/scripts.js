function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalBill = 0;
}

Pizza.prototype.pizzaSizePrice = function () {
  if (this.size === "small") {
    this.sizePrice = 5;
  } else if (this.size === "medium") {
    this.sizePrice = 7;
  } else if (this.size === "large") {
    this.sizePrice = 10;
  }
  return this.sizePrice;
}

Pizza.prototype.pizzaToppingsPrice = function () {
  if (this.toppings === "bacon") {
    this.toppingPrice = 1;
  } else if (this.toppings === "ham") {
    this.toppingPrice = 2;
  } else if (this.toppings === "pineapple") {
    this.toppingPrice = 3;
  } else if (this.toppings === "pepperoni") {
    this.toppingsPrice = 3;
  }
  return this.toppingPrice;
}

Pizza.prototype.pizzaTotal = function () {
  this.totalBill = this.toppingPrice + this.sizePrice;
  return this.totalBill;
}

Pizza.prototype.fullOrder = function () {
  return "Your toppings are: " + this.toppings + " " + "and your size is: " + this.size + ". " + "Your total is: " + "$" + this.totalBill + ". " + "Thank you!"
}

function handleFormSubmission (event) {
  event.preventDefault();
  const userToppings = document.querySelector("input[name=toppings]:checked").value;
  const userSize = document.querySelector("input[name=size]:checked").value;
  let newPizza = new Pizza(userToppings,userSize);
  newPizza.pizzaSizePrice();
  newPizza.pizzaToppingsPrice();
  newPizza.pizzaTotal();
  document.querySelector(".toppings-picked").innerText = newPizza.toppings;
  document.querySelector(".size-picked").innerText = newPizza.size;
  document.querySelector(".total-bill").innerText = newPizza.totalBill;
  document.querySelector("div#pizza-details").removeAttribute("class");
}

window.addEventListener("load", function () {
  this.document.querySelector("form#pizzaChoice").addEventListener("submit", handleFormSubmission);
})