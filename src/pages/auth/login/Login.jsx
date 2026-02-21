import React from "react";
import loginImg from "../../../assets/Side Image.png";
import scss from "./Login.module.scss";
const Login = () => {
  return (
    <div className="cont_signUp">
      <div className={scss.login}>
        <img src={loginImg} alt="" />
        <div className={scss.login_right}>
          <div className={scss.login_title}>
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
          </div>
          <div className={scss.login_inp}>
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          </div>
          <div className={scss.login_btn}>
            <button className={scss.loginBtn}>Log In</button>
            <button>Forget Password?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
