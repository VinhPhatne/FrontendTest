import React from "react";
import Banner from "./body/Banner/Banner.js";
import ProductList from "./body/ProductList/ProductList.js";
import NotificationBar from "./body/NotificationBar/NotificationBar.js";
import Statistics from "./body/Statistics/Statistics.js";


const Home = () => {
  return (
    <div>
      <Banner />,
      <ProductList />,
      <NotificationBar />,
      <Statistics />,
    </div>
  );
};

export default Home;
