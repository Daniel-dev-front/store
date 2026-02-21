import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Cart from "../pages/cart/Cart";
import Login from "../pages/auth/login/Login";
import AddProduct from "../components/admin/addProduct/AddProduct";
import Product from "../components/admin/productList/Product";
import SignUp from "../pages/auth/signUp/SignUp";
import Wishlist from "../pages/wishlist/Wishlist";
import CheckOut from "../pages/checkOut/CheckOut";
import Admin from "../pages/admin/Admin";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/contact", element: <Contact /> },
    { link: "/about", element: <About /> },
    { link: "/signUp", element: <SignUp /> },
    { link: "/wishlist", element: <Wishlist /> },
    { link: "/cart", element: <Cart /> },
    { link: "/login", element: <Login /> },
    { link: "/addProduct", element: <AddProduct /> },
    { link: "/productList", element: <Product /> },
    { link: "/checkOut", element: <CheckOut /> },
    { link: "/admin", element: <Admin /> },
  ];
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
