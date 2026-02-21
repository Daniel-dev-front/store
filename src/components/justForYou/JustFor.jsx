import React from "react";
import { useProduct } from "../../context/MainContext";
import scss from "./Just.module.scss";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
const JustFor = () => {
  const { product } = useProduct();
  return (
    <div className="container">
      <div className={scss.top}>
        <div className={scss.top_text}>
          <span></span>
          <h5> Just For You</h5>
        </div>
        <button>See All</button>
      </div>
      <div className={scss.just_for}>
        {product.map((item, idx) => (
          <div key={idx} className={scss.today_card}>
            <img src={item.img} alt={item.name} />
            <div className={scss.img}>
              <div className={scss.sale}>
                <span id="sale">
                  <p>-35%</p>
                </span>
              </div>
              <span>
                <button>
                  <LuEye size={20} color="black" />
                </button>
              </span>
            </div>
            <button className={scss.cart}>Add To Cart</button>
            <div className={scss.card_text}>
              <div className={scss.name}>
                <h4>{item.name}</h4>
              </div>
              <div className={scss.price}>
                <h4>${item.price}</h4>
                {/* <p>${}</p> */}
              </div>
              <div className={scss.stars}>
                <div className={scss.star}>
                  <span>
                    <FaStar color="#FFAD33" />
                  </span>
                  <span>
                    <FaStar color="#FFAD33" />
                  </span>
                  <span>
                    <FaStar color="#FFAD33" />
                  </span>
                  <span>
                    <FaStar color="#FFAD33" />
                  </span>
                  <span>
                    <FaStar color="#FFAD33" />
                  </span>
                </div>
                <p>(65)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustFor;
