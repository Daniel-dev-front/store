import React, { useEffect } from "react";
import scss from "./Product.module.scss";
import { useProduct } from "../../../context/MainContext";
import { LuEye } from "react-icons/lu";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const Product = () => {
  const { product, deleteProduct, readProduct, addCart } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div className="container">
      <div className={scss.text}>
        <h2>Your products</h2>
      </div>
      <div className={scss.product_cards}>
        {product.map((item, idx) => (
          <div key={idx} className={scss.today_card}>
            <img src={item.img} alt={item.name} />
            <div className={scss.img}>
              {/* <div className={scss.sale}>
                  <span id="sale">
                    <p>-35%</p>
                  </span>
                </div> */}
              <span>
                <button
                  className={scss.heart_btn}
                  onClick={() => {
                    deleteProduct(item._id);
                  }}
                >
                  <DeleteOutlineIcon color="black" />
                </button>
                <button className={scss.eye_btn}>
                  <EditIcon color="black" />
                </button>
              </span>
            </div>
            <button
              onClick={() => {
                addCart(item);
                // const delID = { ...item };
                // delete delID._id;
                // addCart(delID);
              }}
              className={scss.cart}
            >
              Add To Cart
            </button>
            <div className={scss.card_text}>
              <div className={scss.name}>
                <h4>{item.name}</h4>
              </div>
              <div className={scss.price}>
                <h4>${item.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
