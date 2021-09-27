import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleChange(e){
    setSelectedCategory(e.target.value)
    console.log(e)
  }

  const itemsList = items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === 'All' ? itemsList : itemsList.filter(items => items.props.category === selectedCategory)}
      </ul>
    </div>
  );
}

export default ShoppingList;
