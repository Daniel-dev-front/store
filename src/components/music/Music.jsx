import React from "react";
import scss from "./Music.module.scss";
import musicLogo from "../../assets/Frame 694 (1).png";
const Music = () => {
    return (
        <div className="container">
            <div className={scss.music_content}>
                <div className={scss.music_left}>
                    <h5>Categories</h5>
                    <h2>Enhance Your <br /> Music Experience</h2>
                    <div className={scss.time}>
                        <span><p>23</p>Hours</span>
                        <span><p>05</p>Days</span>
                        <span><p>59</p>Minutes</span>
                        <span><p>35</p>Seconds</span>
                    </div>
                    <button>
                        <p>Buy Now!</p>
                    </button>
                </div>
                <div className={scss.music_right}>
                    <img src={musicLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Music;
