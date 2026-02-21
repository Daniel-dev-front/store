import React from "react";
import scss from "./OurProduct.module.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import card2 from "../../assets/71RdoeXxtrL 1.png";

const OurProduct = () => {
    return (
        <div className="container">
            <div className={scss.categories}>
                <div className={scss.categories_main}>
                    <div className={scss.categories_title}>
                        <div className={scss.orange}>
                            <span></span>
                            <h5>Our Products</h5>
                        </div>
                        <h2>Explore Our Products</h2>
                    </div>
                    <div className={scss.categories_btn}>
                        <button>
                            <FaArrowLeft size={24} />
                        </button>
                        <button>
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>
                <div className={scss.month_cards}>
                    <div className={scss.month_card}>
                        <img src={card2} alt="Product 1" />
                        <div className={scss.img}>
                            <span>
                                <button>
                                    <CiHeart size={20} color="black" />
                                </button>
                                <button>
                                    <LuEye size={18} />
                                </button>
                            </span>
                        </div>
                        <button className={scss.cart}>Add To Cart</button>
                        <div className={scss.card_text}>
                            <h4>Breed Dry Dog Food</h4>
                            <div className={scss.price}>
                                <h4>$100</h4>
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
                    </div>
                </div>
                <button className={scss.btn_all}>View All Products</button>
            </div>
        </div>
    );
};

export default OurProduct;
