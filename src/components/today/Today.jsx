import React, { useEffect, useRef } from "react";
import scss from "./Today.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import { useProduct } from "../../context/MainContext";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Today = () => {
  const { product, addWishlist, readProduct, addCart } = useProduct();
  const scrollRef = useRef(null);
  const [value, setValue] = React.useState(2);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -1300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 1300,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    readProduct();
  }, []);
  // const sale = document.querySelector("#sale");
  // const sales = product.find((item) => item.price);
  // console.log(sales.price);

  // if (sale == false) {
  //   sale.style.display = "none";
  // }

  return (
    <div className="container">
      <div className={scss.Today}>
        <div className={scss.today_main}>
          <div className={scss.today_title}>
            <div className={scss.today_orange}>
              <span></span>
              <h5>Today’s</h5>
            </div>
            <h2>Flash Sales</h2>
            <div className={scss.time}></div>
          </div>
          <div className={scss.today_btn}>
            <button onClick={scrollLeft}>
              <FaArrowLeft size={20} />
            </button>
            <button onClick={scrollRight}>
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className={scss.today_cards} ref={scrollRef}>
          {product.map((item, idx) => (
            <div key={idx} className={scss.today_card}>
              <img src={item.img} alt={item.name} />
              <div className={scss.img}>
                {/* <div className={scss.sale}>
                  <span id="sale">
                    <p>-35%</p>
                  </span>
                </div> */}
                <span>
                  <button
                    className={scss.heart_btn}
                    onClick={() => {
                      addWishlist(item);
                      const delId = { ...item };
                      delete delId._id;
                      addWishlist(delId);
                    }}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </button>
                  <button className={scss.eye_btn}>
                    <LuEye className={scss.eye} size={0} />
                  </button>
                </span>
              </div>
              <button
                onClick={() => {
                  addCart(item);
                  // const delID = { ...item };
                  // delete delID._id;
                  // addCart(delID);
                }}
                className={scss.cart}
              >
                Add To Cart
              </button>
              <div className={scss.card_text}>
                <div className={scss.name}>
                  <h4>{item.name}</h4>
                </div>
                <div className={scss.price}>
                  <h4>${item.price}</h4>
                </div>
                <div className={scss.stars}>
                  <div className={scss.star}>
                    <Box sx={{ "& > legend": { mt: 2 } }}>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          // Если newValue равно null (повторный клик по той же звезде),
                          // оставляем старое значение. Если новое — записываем.
                          if (newValue !== null) {
                            setValue(newValue);
                          }
                        }}
                      />
                    </Box>
                  </div>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Today;
