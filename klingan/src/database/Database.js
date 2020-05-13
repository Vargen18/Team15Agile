// A collection of hardcoded data to be used by the App to simulate how the website would look like when we have a real database
// The methods here could be used as an interface for said database.
// Feel free to add to this if needed.

export function getProducts() {
  return [
    // { id: 0, section: "", name: "Ris", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Brun_ris.jpg/1280px-Brun_ris.jpg" },
    // { id: 1, section: "", name: "Yoghurt", url: "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg" },
    // { id: 2, section: "", name: "Nocco", url: "https://www.tingstad.com/fixed/images/Main/1570702879/21366260.png" },
    // { id: 3, section: "", name: "Bärs", url: "http://1.bp.blogspot.com/-3xy02lE8HnM/UY0z7NvGpVI/AAAAAAAAGqw/mTmitY-MF2o/s1600/bild-2.JPG" },
    // { id: 4, section: "", name: "Kaviar", url: "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg" },
    // { id: 5, section: "", name: "Vodka", url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Absolut_vodka.jpg" },
    // { id: 6, section: "", name: "Mjöl", url: "https://www.bohuslaningen.se/image/policy:1.6591695:1529070430/Aklh7j2p4Dpk1OWXu8tvW-h2ZWg.jpg?f=Regular&w=960&$p$f$w=7e0687f" },
    { id: 7, section: "Bröd", name: "Surdegsbröd", url: "" },
    { id: 8, section: "Bröd", name: "Knäckebröd", url: "" },
    { id: 9, section: "Mejeri", name: "Västerbottenost", url: "" },
    { id: 10, section: "Frukt och grönt", name: "Spenat", url: "" },
    { id: 11, section: "Kött", name: "Bacone", url: "" },
    { id: 12, section: "Fryst", name: "Findus ärtor", url: "" },
    { id: 13, section: "Frukt och grönt", name: "Äpple", url: "" },
    { id: 14, section: "Mejeri", name: "Laktosfri mjölk", url: "" },
    { id: 15, section: "Fryst", name: "Fryst kyckling", url: "" },
    { id: 16, section: "Kött", name: "Skinka", url: "" },
  ];
}

export function getOrders() {
  return [
    { id: 0, order: { customer: getCustomer(), products: getProducts() } },
    { id: 1, order: { customer: getCustomer2(), products: getProducts() } },
  ];
}

export function getOrder(i) {
  return getOrders()[i];
}

export function getCustomer() {
  return { name: "Börje", mail: "börje@mail.com", telefon: "031" };
}

export function getCustomer2() {
  return { name: "Ingjerd", mail: "Ingjerd@mail.com", telefon: "032" };
}

// section = avdelning
export function getSections() {
  return ["Mejeri", "Frukt och grönt", "Fryst", "Bröd", "Kött"];
}
