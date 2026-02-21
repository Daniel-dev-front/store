import React from "react";
import scss from "./About.module.scss";
import imgRight from "../../assets/aboutImg.png";
import services from "../../assets/Services.svg";
import servicesDoll from "../../assets/Services (3).png";
import customer2 from "../../assets/Services (1).svg";
import moneyBack from "../../assets/Services (2).svg";
import tomCruise from "../../assets/tomCruise.png";
import emma from "../../assets/emma.png";
import willSmith from "../../assets/willSmith.png";
import delivery from "../../assets/Services_cars.png";
import customer1 from "../../assets/Services_customer.png";
import money_back from "../../assets/Services_Money_back.png";
import { IoArrowUpOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div className="cont_signUp">
        <div className={scss.story}>
          <div className={scss.left_text}>
            <h2>Our Story</h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src={imgRight} alt="" />
        </div>
      </div>
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
            <img src={customer1} alt="customer" />
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
    </div>
  );
};

export default About;
