import React from 'react';
import scss from "./NewArrial.module.scss"
import ps5 from "../../assets/ps5.png"
import women from "../../assets/women.png"
import speaker from "../../assets/speaker.png"
import perfume from "../../assets/perfume.png"
const NewArrial = () => {
    return (
        <div className='container'>
            <div className={scss.new_Arrial}>
                <div className={scss.content_top}>
                    <div className={scss.top}>
                        <span></span>
                        <h5>Featured</h5>
                    </div>
                    <h2>New Arrival</h2>
                </div>
                <div className={scss.content_bottom}>
                    <div className={scss.bottom_left}>
                        <img src={ps5} alt="" />
                        <div className={scss.text}>
                            <h2>PlayStation 5</h2>
                            <p>Black and White version of the PS5 coming out on sale.</p>
                            <button className={scss.btn_now}>
                                <p>Shop Now</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className={scss.right_bottom}>
                        <div className={scss.right_top}>
                            <div className={scss.top_text}>
                                <h2>Women’s Collections</h2>
                                <p>Featured woman collections that give you another vibe.</p>
                                <button className={scss.btn_now}>
                                    <p>Shop Now</p>
                                    <span></span>
                                </button>
                            </div>
                            <img src={women} alt="" />
                        </div>
                        <div className={scss.bottom_right}>
                            <div className={scss.card_img}>
                                <img src={speaker} alt="" />
                                <div className={scss.bottom_text}>
                                    <h2>Speakers</h2>
                                    <p>Amazon wireless speakers</p>
                                    <button className={scss.btn_now}>
                                        <p>Shop Now</p>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                            <div className={scss.card_img}>
                                <img src={perfume} alt="" />
                                <div className={scss.bottom_text}>
                                    <h2>Perfume</h2>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <button className={scss.btn_now}>
                                        <p>Shop Now</p>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewArrial;