import React from "react";
import Main from "../../components/main/Main";
import Categories from "../../components/categories/Categories";
import Month from "../../components/month/Month";
import Music from "../../components/music/Music";
import OurProduct from "../../components/ourPoduct/OurProduct";
import Featured from "../../components/newArrial/NewArrial";
import Footer from "../../components/footer/Footer";
import NewArrial from "../../components/newArrial/NewArrial";
import Today from "../../components/today/Today";
import Service from "../../components/service/Service";
import { useProduct } from "../../context/MainContext";
const Home = () => {
  return (
    <div>
      <Main />
      <Today />
      <hr />
      <Categories />
      <Month />
      <Music />
      <OurProduct />
      <NewArrial />
      <Service />
    </div>
  );
};

export default Home;
