import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
const Product = ({ imgSrc, price, title, location }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={imgSrc} alt="" />
      </div>

      <div className="product__details">
        <h4 className="product__details__price">
          <CurrencyFormat
            value={price}
            displayType="text"
            thousandSeparator={true}
            prefix="Rs"
          />
        </h4>
        <p className="product__details__title">{title}</p>
        <span className="product__details__location">{location}</span>
      </div>
    </div>
  );
};

export default Product;
