import React, {useState} from "react";
import './ShoppingDisplay.scss'

const ShoppingDisplay = ({id, title, desc, price, stock, addData}) => {
    const [currStock, setStock] = useState(stock)

    const handleClick = () => {
        setStock(currStock - 1)
    }

  return (
    <div>
      <div className="container shopping" key={id}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <span>${price}</span>
        <span>
          <b>Stock: {stock}</b>
        </span>
        <button onClick={addData}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShoppingDisplay;
