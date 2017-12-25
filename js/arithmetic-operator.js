var subtotal = 14*5;
var shipping = 0.5*(13+1);
var total = subtotal+shipping;

var e1 = document.getElementById("subtotal");
e1.textContent = subtotal;

var e2 = document.getElementById("shipping");
e2.textContent = shipping;

var e3 = document.getElementById("total");
e3.textContent = total;