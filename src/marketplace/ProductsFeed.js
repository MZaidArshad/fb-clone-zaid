import React from "react";
import "./ProductsFeed.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useFetch from "react-fetch-hook";
import Product from "./Product";
const ProductsFeed = () => {
  const { isLoading, data, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="poductsFeed">
      <div className="poductsFeed__heading">
        <h3>Today's picks</h3>
        <span>
          <LocationOnIcon />
          Faisalabad. 40 Km
        </span>
      </div>
      <div className="productsFeed__products">
        {error && (
          <h3>
            `Sorry for trouble, we faced an error in loading products $
            {error.statusText}`
          </h3>
        )}
        {isLoading && (
          <img
            className="productsFeed__products__loadingImg"
            src="loading.gif"
            alt="loading"
          />
        )}

        {!isLoading &&
          data?.map((product) => {
            return (
              <Product
                key={product.id}
                imgSrc={product.image}
                price={product.price}
                title={product.title}
                location="Faisalabad"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductsFeed;
