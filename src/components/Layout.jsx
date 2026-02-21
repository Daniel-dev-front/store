import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainRoutes from "../routes/MainRoutes";
const Layout = () => {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
