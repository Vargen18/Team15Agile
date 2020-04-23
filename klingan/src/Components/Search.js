import React, { Component } from "react";
import { getProducts } from "../database/Database";



class Search {

    


    Search(){
        var rawProducts = getProducts();
         alert (rawProducts[1].name);
    }
}

export default Search;