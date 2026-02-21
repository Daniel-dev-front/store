import React from "react";
import scss from "./Main.module.scss";
import { GoArrowRight } from "react-icons/go";
import apple from "../../assets/1200px-Apple_gray_logo 1.png";
import iphone from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
const Main = () => {
  return (
    <div className="container">
      <div className={scss.mainContent}>
        <div className={scss.main_left}>
          <div className={scss.main_text}>
            <p>
              Woman’s Fashion <span></span>
            </p>
            <p>
              Men’s Fashion <span></span>
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Gr oceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="line_vertical"></div>
        </div>
        <div className={scss.main_right}>
          <div className={scss.left}>
            <div className={scss.icon_text}>
              <img src={apple} alt="" />
              <p>iPhone 14 Series</p>
            </div>
            <div className={scss.text}>
              <h2>Up to 10% off Voucher</h2>
            </div>
            <div className={scss.button}>
              <button>
                <p>
                  Shop Now <GoArrowRight size={20} />{" "}
                </p>
                <span className={scss.btn_line}></span>
              </button>
            </div>
          </div>
          <div className={scss.circle}>
            <span></span>
            <span className={scss.orange}></span>
            <span></span>
          </div>
          <div className={scss.right}>
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
