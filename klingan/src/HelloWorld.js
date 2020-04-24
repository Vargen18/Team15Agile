import React from "react";
import Search from "./Components/Search";

const search = new Search();
const HelloWorld = () => {
  function sayHello() {
    alert("Hello, World!");
  }

  return (
    <button onClick={search.Search}>Click me!</button> //Repurposed for testing search
  );
};

export default HelloWorld;
