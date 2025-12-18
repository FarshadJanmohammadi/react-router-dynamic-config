import React from "react";
import { Link } from "react-router";

const ProductsPage = () => {
  return (
    <ul>
      <li>
        <Link to="/products/1">Product 1</Link>
      </li>
      <li>
        <Link to="/products/2">Product 2</Link>
      </li>
      <li>
        <Link to="/products/3">Product 3</Link>
      </li>
    </ul>
  );
};

export default ProductsPage;
