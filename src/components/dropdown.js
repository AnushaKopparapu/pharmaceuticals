import React, { useState } from "react";
import { serviceDropdown } from "./navitems";
import { Link } from "react-router-dom";
import "./dropdown.css";

export function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "services-submenu-clicked" : "services-submenu"}
        onClick={() => setDropdown(false)}
      >
        {serviceDropdown.map((item) => (
          <li key={item.id} className={item.cName}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
