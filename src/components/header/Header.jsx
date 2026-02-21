import React from "react";
import scss from "./Header.module.scss";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import productIcon from "../../assets/product.png";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { useProduct } from "../../context/MainContext";
import { useAuth } from "../../context/AuthProvider";
import { MdLogout } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const { cart, setSearch, search } = useProduct();
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -19px;
      width: 20px;
      font-size: 11px;
      right: 1px;
    }
  `;
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  return (
    <div>
      <div className="header_add">
        <div className="container">
          <div className={scss.add}>
            <span>
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <h5>ShopNow</h5>
            </span>
            <select>
              <option value="en">English</option>
              <option value="ru">Rusian</option>
              <option value="kg">Kyrgyz</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="header" className={scss.header}>
          <div className={scss.header_left}>
            <NavLink className={scss.nav} to="/">
              <h2>Exclusive</h2>
            </NavLink>
            <div className={scss.navi}>
              <NavLink className={scss.nav} to="/">
                <h4>Home</h4>
              </NavLink>
              <NavLink className={scss.nav} to="/contact">
                <h4>Contact</h4>
              </NavLink>
              <NavLink className={scss.nav} to="/about">
                <h4>About</h4>
              </NavLink>
              <NavLink className={scss.nav} to="/signUp">
                <h4>Sign Up</h4>
              </NavLink>
              {user && (
                <p>
                  <div className={scss.adds}>
                    <NavLink className={scss.add} to="/addProduct">
                      <MdAddBusiness size={25} color="#18133f" />
                    </NavLink>
                    <NavLink className={scss.product} to="/productList">
                      <img src={productIcon} alt="product" />
                    </NavLink>
                    <MdLogout
                      size={55}
                      color="black"
                      onClick={() => {
                        logout();
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </p>
              )}
            </div>
          </div>
          <div className={scss.header_right}>
            <div className={scss.search}>
              <input
                value={search}
                onChange={(e) => {
                  navigate("/productList");
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className={scss.search_icon} />
            </div>
            <div className={scss.logins}>
              <NavLink to="/wishlist">
                <CiHeart size={30} color="black" />
              </NavLink>
              <NavLink to="/cart">
                <IoCartOutline color="black" size={25} />
                <CartBadge
                  badgeContent={cart.length}
                  color="primary"
                  overlap="circular"
                />
              </NavLink>
              <NavLink>
                {user && isAdmin && (
                  <Link to="/admin">
                    <FaCircleUser size={25} color="#db4444" />
                  </Link>
                )}
                <BiUser size={25} color="black" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
