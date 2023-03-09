import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import "./MarketPlace.css";
import ProductsFeed from "./ProductsFeed";

const MarketPlace = () => {
  return (
    <div className="marketPlace">
      <Header active={3} />
      <div className="marketplace__body">
        <Sidebar />
        <ProductsFeed />
      </div>
    </div>
  );
};

export default MarketPlace;
