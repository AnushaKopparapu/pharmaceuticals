import React, { useState } from "react";
import { productsDropdown } from "./navitems";
import { Link } from "react-router-dom";

export function ProductsDropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "products-submenu-clicked" : "products-submenu"}
        onClick={() => setDropdown(false)}
      >
        {productsDropdown.map((item) => (
          <li key={item.id} className={item.cName}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductsDropdown;
