import React from "react";
import scss from "./Categories.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Phones from "../../assets/Category-CellPhone.svg";
import Laptops from "../../assets/Category-Computer.svg";
import Headphones from "../../assets/Category-Headphone.svg";
import Cameras from "../../assets/Category-Camera.svg";
import Watches from "../../assets/Category-SmartWatch.svg";
import Gaming from "../../assets/Category-Gamepad.png";
const Categories = () => {
  return (
    <div className="container">
      <div className={scss.categories}>
        <div className={scss.categories_main}>
        <div className={scss.categories_title}>
            <div className={scss.orange}>
            <span></span> 
            <h5>Categories</h5>
            </div>
            <h2>Browse By Category</h2>
        </div>
        <div className={scss.categories_btn}>
            <button><FaArrowLeft size={24} /></button>
            <button><FaArrowRight size={24} /></button>
        </div>
        </div>
      <div className={scss.categories_cards}>
        <div className={scss.categories_card}>
          <img src={Phones} alt="Phones" />
          <h4>Cell Phones</h4>
        </div>
        <div className={scss.categories_card}>
          <img src={Laptops} alt="Laptops" />
          <h4>Laptops</h4>
        </div>
        <div className={scss.categories_card}>
          <img src={Watches} alt="Watches" />
          <h4>Smart Watches</h4>
        </div>
        <div className={scss.categories_card}>
          <img src={Cameras} alt="Cameras" />
          <h4>Cameras</h4>
        </div>
        <div className={scss.categories_card}>
          <img src={Headphones} alt="Headphones" />
          <h4>Headphones</h4>
        </div>
        <div className={scss.categories_card}>
          <img src={Gaming} alt="Gaming" />
          <h4>Gaming</h4>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Categories;
