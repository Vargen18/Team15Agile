// A collection of hardcoded data to be used by the App to simulate how the website would look like when we have a real database
// The methods here could be used as an interface for said database.
// Feel free to add to this if needed.

export function getProducts() {
  return [
    { id: 0, name: "Potatis" },
    { id: 1, name: "Lösgodis" },
    { id: 2, name: "Frysta grönsaker" },
  ];
}

export function getOrders() {
  return [
    { id: 0, order: { customer: getCustomer(), products: getProducts() } },
    { id: 1, order: { customer: getCustomer(), products: getProducts() } },
  ];
}

export function getCustomer() {
  return { name: "Börje", mail: "börje@mail.com", telefon: "031" };
}
