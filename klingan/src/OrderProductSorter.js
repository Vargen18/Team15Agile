import * as db from "./database/Database";

// A function which sorts a list of products according to a given
// product section order. Useful when the retailer wants to sort
// products to pick them up efficiently.
// Params: products
export function sortOrder(products) {
  let sectionOrder = db.getSections();
  let sorted = [];
  for (let i = 0; i < sectionOrder.length; i++) {
    let section = sectionOrder[i];
    for (let j = 0; j < products.length; j++) {
      let product = products[j];
      if (product.section === section) {
        sorted.push(product);
      }
    }
  }
  return sorted;
}
