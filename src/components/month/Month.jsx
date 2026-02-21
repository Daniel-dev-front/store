import React from 'react';
import scss from './Month.module.scss';
import card1 from '../../assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png';
import card2 from "../../assets/Frame 606.png"
import card3 from "../../assets/Frame 610.png"
import card4 from "../../assets/Frame 612.png"
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const Month = () => {
    return (
        <div className="container">

            <div className={scss.month_section}>
                <div className={scss.month_top}>
                    <div className={scss.top}>
                        <span></span>
                        <h4>This Month</h4>
                    </div>
                    <div className={scss.bottom}>
                        <h2>Best Selling Products</h2>
                        <button>View All</button>
                    </div>
                </div>
                <div className={scss.month_cards}>
                    <div className={scss.month_card}>

                        <img src={card1} alt="Product 1" />
                        <div className={scss.img}>
                            <span>
                                <button><CiHeart size={20} color='black' /></button>
                                <button><LuEye size={18} /></button>
                            </span>
                        </div>
                        <div className={scss.card_text}>
                            <h4>The north coat</h4>
                            <div className={scss.price}>
                                <h4>$260</h4>
                                <p>$360</p>
                            </div>
                            <div className={scss.stars}>
                                <div className={scss.star}>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                </div>
                                <p>(35)</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.month_card}>
                        <img src={card2} alt="Product 2" />
                        <div className={scss.img}>
                            <span>
                                <button><CiHeart size={20} color='black' /></button>
                                <button><LuEye size={18} /></button>
                            </span>
                        </div>
                        <div className={scss.card_text}>
                            <h4>Gucci duffle bag</h4>
                            <div className={scss.price}>
                                <h4>$960</h4>
                                <p>$1160</p>
                            </div>
                            <div className={scss.stars}>
                                <div className={scss.star}>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaRegStarHalfStroke color='#FFAD33' /></span>
                                </div>
                                <p>(65)</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.month_card}>
                        <img src={card3} alt="Product 3" />
                        <div className={scss.img}>
                            <span>
                                <button><CiHeart size={20} color='black' /></button>
                                <button><LuEye size={18} /></button>
                            </span>
                        </div>
                        <div className={scss.card_text}>
                            <h4>RGB liquid CPU Cooler</h4>
                            <div className={scss.price}>
                                <h4>$160</h4>
                                <p>$170</p>
                            </div>
                            <div className={scss.stars}>
                                <div className={scss.star}>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaRegStarHalfStroke color='#FFAD33' /></span>
                                </div>
                                <p>(65)</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.month_card}>
                        <img src={card4} alt="Product 4" />
                        <div className={scss.img}>
                            <span>
                                <button><CiHeart size={20} color='black' /></button>
                                <button><LuEye size={18} /></button>
                            </span>
                        </div>
                        <div className={scss.card_text}>
                            <h4>Small BookSelf</h4>
                            <div className={scss.price}>
                                <h4>$360</h4>
                            </div>
                            <div className={scss.stars}>
                                <div className={scss.star}>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                    <span><FaStar color='#FFAD33' /></span>
                                </div>
                                <p>(65)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Month;
