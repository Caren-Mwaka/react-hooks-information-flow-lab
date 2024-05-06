// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  // State variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle changes in the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtering items based on the selected category
  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      {/* Render the Filter component and pass handleCategoryChange function as a prop */}
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {/* Rendering filtered items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
