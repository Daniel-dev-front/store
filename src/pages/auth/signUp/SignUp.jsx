import React, { useState } from "react";
import scss from "./SignUp.module.scss";
import img from "../../../assets/Side Image.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { register, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const isAdmin = adminCode === "ADMIN123";
      await register(email, password, isAdmin);
      alert("Регистрация успешна!");
      setEmail("");
      setPassword("");
      setAdminCode("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await loginWithGoogle();
      alert("Google менен кирди");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const user = await register(email, password);
  //   console.log("Registered user:", user);
  // };

  return (
    <div>
      <div id={scss.register}>
        <div className="cont_signUp">
          <div className={scss.content}>
            <div className={scss.img}>
              <img src={img} alt="" />
            </div>
            <div className={scss.sign_up}>
              <div className={scss.sign_text}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                </form>

                <div className={scss.sign_inGoogle}>
                  <button className={scss.create} type="submit">
                    Create Account
                  </button>
                  <button onClick={handleGoogleSignUp}>
                    <FcGoogle size={25} />
                    Sign up with Google
                  </button>
                  <div className={scss.login}>
                    <p>Already have account?</p>
                    <NavLink to="/login">
                      <a href="/login">Log in</a>
                    </NavLink>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
