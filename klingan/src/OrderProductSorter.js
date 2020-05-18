import * as db from "./database/Database";

// A function which sorts a list of products according to a given
// product group order. Useful when the retailer wants to sort
// products to pick them up efficiently.
// Params: products
export function sortOrder(products) {
  let productGroups = db.getProductGroups();
  let sorted = [];
  for (let i = 0; i < productGroups.length; i++) {
    let productGroup = productGroups[i];
    for (let j = 0; j < products.length; j++) {
      let product = products[j];
      if (product.name === productGroup) {
        sorted.push(product);
      }
    }
  }
  return sorted;
}
