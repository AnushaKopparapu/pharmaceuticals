import React, { useState } from "react";
import { productitemslist } from "../pages/productitems"; // Import the JSON data
import "./fade.css";

const Transitions = () => {
  const [productItems, setProductItems] = useState(
    productitemslist["Gynecology & Obstetrics"]
  ); // State to store selected data
  const [activeId, setActiveId] = useState("Gynecology & Obstetrics");

  // Function to handle the click event on an li element
  const handleItemClick = (id) => {
    const data = productitemslist[id]; // Fetch the corresponding data from dataList
    setProductItems(data); // Update the state with fetched data
    setActiveId(id);
  };

  return (
    <div className="transitions-container">
      <div className="content-wrapper">
        <ul className="productslist">
          {Object.keys(productitemslist).map((key) => (
            <li
              key={key}
              onClick={() => handleItemClick(key)}
              className={activeId === key ? "productlist-active" : ""}
            >
              {key.charAt(0).toUpperCase() +
                key
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()}
            </li>
          ))}
        </ul>

        {/* Displaying the fetched data  */}
        <div className="product-container">
          <div className="productsdisplay">
            {productItems.map((item) => (
              <div key={item.id} className="product-item">
                <h5>{item.title.toUpperCase()}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
