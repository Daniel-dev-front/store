import React, { useEffect } from "react";
import scss from "./Cart.module.scss";
import { useProduct } from "../../context/MainContext";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Cart = () => {
  const {
    cart,
    readCart,
    deleteCart,
    updateQuantity,
    increase,
    decrease,
    counts,
  } = useProduct();

  const navigate = useNavigate();
  useEffect(() => {
    readCart();
  }, []);

  const totalPrice = cart.reduce((sum, item) => {
    const itemTotal = item.price * item.quantity;
    return sum + itemTotal;
  }, 0);

  const delId = cart.find((item) => item._id);

  useEffect(() => {
    readCart();
  }, []);
  return (
    <div className="container">
      <div className={scss.navi}>
        <NavLink to={"/"} className={scss.nav}>
          <h5>Home</h5>
          <h5>/</h5>
          <p>Cart</p>
        </NavLink>
      </div>
      <div className={scss.cart}>
        <div className={scss.price}>
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </div>
        {cart.map((item, idx) => {
          // item.quantity = counts[item._id] || 1;

          return (
            <div key={idx} className={scss.product}>
              <div className={scss.name}>
                <img src={item.img} alt={item.name} />
                <span>
                  <h2>{item.name}</h2>
                </span>
              </div>
              <div className={scss.prices}>
                <p>${item.price}</p>

                <div className={scss.shet}>
                  <p>{item.quantity}</p>
                  <div className={scss.btn}>
                    <button onClick={() => updateQuantity(item, 1)}>
                      <FaAngleUp cursor={"pointer"} size={10} />
                    </button>
                    <button onClick={() => updateQuantity(item, -1)}>
                      <FaAngleDown cursor={"pointer"} size={10} />
                    </button>
                  </div>
                </div>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          );
        })}
        <div className={scss.return}>
          <button>
            <a href="/">Return To Shop</a>
          </button>
          <button onClick={() => deleteCart(delId._id)}>Update Cart</button>
        </div>
      </div>
      <div className={scss.total_cont}>
        <div className={scss.left}>
          <input placeholder="Coupon Code" type="text" />
          <button>Apply Coupon</button>
        </div>
        <div className={scss.right}>
          <h2>Cart Total</h2>
          <div className={scss.subtotal}>
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
          </div>
          <hr />
          <div className={scss.shipping}>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className={scss.total}>
            <p>Total:</p>
            <p>${totalPrice} </p>
          </div>
          <button
            onClick={() => {
              navigate("/checkOut");
            }}
          >
            Procees to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
