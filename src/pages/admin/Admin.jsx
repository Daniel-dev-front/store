import React from "react";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import Product from "../../components/admin/productList/Product";

const Admin = () => {
  return (
    <div>
      <AddProduct />
      <Product />
    </div>
  );
};

export default Admin;
