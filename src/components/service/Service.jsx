import React from "react";
import scss from "./Service.module.scss";
import delivery from "../../assets/Services_cars.png";
import customer from "../../assets/Services_customer.png";
import money_back from "../../assets/Services_Money_back.png";
import { IoArrowUpOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className="container">
      <div className={scss.all_service}>
        <div className={scss.service}>
          <img src={delivery} alt="delivery" />
          <div className={scss.text}>
            <h2>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className={scss.service}>
          <img src={customer} alt="customer" />
          <div className={scss.text}>
            <h2>24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className={scss.service}>
          <img src={money_back} alt="money_back" />
          <div className={scss.text}>
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
      <div className={scss.top}>
        <button>
          <a href="/#header">
            <IoArrowUpOutline color="black" size={25} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Service;
