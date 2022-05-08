import React from "react";
import Products from "../../ProductsManagement/Products/Products";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Banner />
      <Products />
    </>
  );
};

export default Home;
