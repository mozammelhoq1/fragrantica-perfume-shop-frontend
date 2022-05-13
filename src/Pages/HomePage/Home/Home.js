import React from "react";
import Products from "../../ProductsManagement/Products/Products";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import PhotoAlbum from "../PhotoAlbum/PhotoAlbum";
import Reviews from "../Review/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Banner />
      <Products />
      <PhotoAlbum />
      <Reviews />
    </>
  );
};

export default Home;
