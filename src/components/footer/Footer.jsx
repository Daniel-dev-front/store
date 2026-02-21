import React from "react";
import scss from "./Footer.module.scss";
import { AiOutlineSend } from "react-icons/ai";
import qr_code from "../../assets/Qr Code.png";
import android_app from "../../assets/android.png";
import appStore from "../../assets/download-appstore.png";
import { RiFacebookLine } from "react-icons/ri";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <footer className={scss.footer}>
          <div className={scss.footer_card}>
            <h2>Exclusive</h2>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className={scss.inp}>
              <input type="text" placeholder="Enter your email" name="" id="" />
              <AiOutlineSend size={25} color="white" />
            </div>
          </div>
          <div className={scss.footer_card}>
            <h2>Support</h2>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className={scss.link}>
            <h2>Account</h2>
            <p>My Account</p>
            <a href="/login">
              Login / <a href="/signUp">Register</a>
            </a>
            <a href="/cart">Cart</a>
            <a href="/favorites">Wishlist</a>
            <p>Shop</p>
          </div>
          <div className={scss.footer_card}>
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className={scss.app}>
            <h2>Download App</h2>
            <h3>Save $3 with App New User Only</h3>
            <div className={scss.dow_apps}>
              <img src={qr_code} alt="qr_code" />
              <div className={scss.apps}>
                <img src={android_app} alt="android_app" />
                <img src={appStore} alt="appStore" />
              </div>
            </div>
            <div className={scss.social}>
              <RiFacebookLine color="white" size={30} />
              <FiTwitter color="white" size={30} />
              <PiInstagramLogoLight color="white" size={30} />
              <RiLinkedinLine color="white" size={30} />
            </div>
          </div>
        </footer>
      </div>
      <div id="line" className={scss.fot}>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
