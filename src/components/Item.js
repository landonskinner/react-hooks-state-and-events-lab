import React, {useState} from "react";





function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const updateInCart = () => {
    setInCart(!inCart)
  }
  return (
    <li className={inCart === false ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={updateInCart}>{inCart === false ? 'Add to Cart' : 'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
