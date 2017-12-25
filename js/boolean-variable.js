// create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// get the element that has an id of stock.
var elStock = document.getElementById('stocl');
// set class name with the value of inStock variable.
elStock.className = inStock;

// get the element that has an id of shipping.
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variavle.
elShip.className = shipping;