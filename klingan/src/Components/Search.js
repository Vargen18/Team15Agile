import React, { Component } from "react";
import { getProducts } from "../database/Database";

class Search {
  Search(searchTerm) {
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
