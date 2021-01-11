import React, { useState } from "react";
import "./ShoppingCart.scss";
import { connect } from "react-redux";
import {addData} from '../redux/actions/shopping-actions'
// import { addToCart } from "../redux/actions/shopping-actions";
// import Data from "../shopping/shopping.json";
import ShoppingDisplay from "./ShoppingDisplay";

const ShoppingCart = ({ title, addData, data }) => {
  console.log(addData)

  const displayCart = data.map(({ id, title, desc, price, stock }) => {
    return (
      <ShoppingDisplay
        title={title}
        key={id}
        desc={desc}
        price={price}
        stock={stock}
        addData={addData}
      />
    );
  });
  return (
    <div className="shopping">
      <h1>{title}</h1>
      <div className="wrapper border">
        <div className="wrapper shopping">
          {displayCart}
          {/* {itemList} */}
        </div>
      </div>
      <div>
        <h2>This is your current cart</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {return { data: state.shopping.data };};

const mapDispatchToProps = (dispatch) => {
  return {
    addData: () => dispatch(addData),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
