import React, { Component } from "react";
import { getProducts } from "../database/Database";

// Unfinished class that will be used for searching and sorting.
class Search {
  Search(searchTerm) {
    //Sends a pop-up for each product that matches the (hardcoded) search term.
    searchTerm = "Potatis"; //Hårdkodat for now
    var products = getProducts();
    var flag = true;
    for (let i = 0; i < products.length; i++) {
      flag = true;
      for (let j = 0; j < searchTerm.length; j++) {
        if (searchTerm[j] != products[i].name[j]) {
          flag = false;
          break;
        }
      }
      if (flag == true) {
        alert(products[i].name);
      }
    }
  }
}

export default Search;
