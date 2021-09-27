import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [fillCart, setFillCart] = useState(true);

  return (
    <li className={fillCart ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setFillCart(!fillCart)} className="add">{fillCart ? 'Add to Cart' : 'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
