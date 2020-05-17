let products = [
  {
    name: "iron",
    inventory: 5,
    unit_price: 45.99,
  },
  {
    name: "toothbrush",
    inventory: 10,
    unit_price: 123.75,
  },
  {
    name: "cup",
    inventory: 2,
    unit_price: 399.5,
  },
];

function listProducts() {
  for (let i = 0; i < products.length; i += 1) {
    document.getElementById("name").innerHTML = products[i].name;
    document.getElementById("price").innerHTML = products[i].unit_price;
  }
}
listProducts();
