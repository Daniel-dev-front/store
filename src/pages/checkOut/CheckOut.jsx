import React, { useEffect, useState } from "react";
import styles from "./CheckOut.module.scss";
import axios from "axios";
import { useProduct } from "../../context/MainContext";
import bank from "../../assets/Frame 834.png";
import { TbXboxXFilled } from "react-icons/tb";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const CheckOut = () => {
  const { cart, readCart, totalPrice, clearAll, deleteCart } = useProduct();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    readCart();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const BOT_TOKEN = "8210012642:AAG3pCoJ52BeZ5BiEhXXkjRya9qFJQZod7o";
  const CHAT_ID = "5946461741";
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Формируем текст сообщения для Telegram
    let messageText = `<b>Новый заказ (Billing Details):</b>\n`;
    messageText += `\n<b>Личные данные:</b>\n`;
    messageText += `Имя: ${formData.firstName}\n`;
    messageText += `Компания: ${formData.companyName || "N/A"}\n`;
    messageText += `Телефон: ${formData.phoneNumber}\n`;
    messageText += `Email: ${formData.emailAddress}\n`;
    messageText += `\n<b>Адрес доставки:</b>\n`;
    messageText += `Улица: ${formData.streetAddress}\n`;
    messageText += `Квартира/Этаж: ${formData.apartmentDetails || "N/A"}\n`;
    messageText += `Город: ${formData.townCity}\n`;
    messageText += `\n<b>Товары в заказе:</b>\n`;
    if (cart && cart.length > 0) {
      cart.forEach((item, index) => {
        messageText += `${index + 1}. ${item.name} - $${item.price} x ${
          item.quantity || 1
        } шт.\n`;
      });
      messageText += `\n<b>Итого: $${totalPrice}</b>`;
    } else {
      messageText += `Корзина пуста`;
    }
    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageText,
      });

      alert(
        `Спасибо, ${formData.firstName}! Ваши данные отправлены в Telegram.`
      );
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      alert("Произошла ошибка при отправке данных.");
    }
  };
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 50,
    width: 24,
    height: 24,
    padding: 4,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
      ...theme.applyStyles("dark", {
        backgroundColor: "#30404d",
      }),
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
      ...theme.applyStyles("dark", {
        background: "rgba(57,75,89,.5)",
      }),
    },
    ...theme.applyStyles("dark", {
      boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
      backgroundColor: "#394b59",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
    }),
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&::before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });
  function BpCheckbox(props) {
    return (
      <Checkbox
        sx={{ "&:hover": { bgcolor: "transparent" } }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        slotProps={{ input: { "aria-label": "Checkbox demo" } }}
        {...props}
      />
    );
  }

  return (
    <div className="container">
      <div className={styles.contactPage}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.contactContainer}>
            <div className={styles.contactGrid}>
              <div className={styles.billingContainer}>
                <h1 className={styles.title}>Billing Details</h1>
                <label htmlFor="firstName" className={styles.label}>
                  First Name*
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label htmlFor="companyName" className={styles.label}>
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={styles.input}
                />
                <label htmlFor="streetAddress" className={styles.label}>
                  Street Address*
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <input
                  type="text"
                  id="apartmentDetails"
                  name="apartmentDetails"
                  placeholder="Apartment, floor, etc. (optional)"
                  value={formData.apartmentDetails}
                  onChange={handleChange}
                  className={styles.input}
                />
                <label htmlFor="townCity" className={styles.label}>
                  Town/City*
                </label>
                <input
                  type="text"
                  id="townCity"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label htmlFor="phoneNumber" className={styles.label}>
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label htmlFor="emailAddress" className={styles.label}>
                  Email Address*
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="saveInfo" className={styles.checkboxLabel}>
                    Save this information for faster check-out next time.
                  </label>
                </div>
                {/* Кнопка отправки формы */}
              </div>
              <div className={styles.right}>
                <div className={styles.product}>
                  {cart.map((item, idx) => (
                    <div key={idx} className={styles.check}>
                      <span>
                        <button onClick={() => deleteCart(item._id)}>
                          <TbXboxXFilled color="red" size={20} />
                        </button>
                        <img src={item.img} alt="" />
                        <h5>{item.name}</h5>
                      </span>
                      <div className={styles.pri}>
                        <p>${item.price}</p>
                        <p>{item.quantity}шт</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.total}>
                  <div className={styles.subtotal}>
                    <p>Subtotal:</p>
                    <p>${totalPrice}</p>
                  </div>
                  <hr />
                  <div className={styles.shipping}>
                    <p>Shipping:</p>
                    <p>Free</p>
                  </div>
                  <hr />
                  <div>
                    <p>Total:</p>
                    <p>${totalPrice} </p>
                  </div>
                </div>
                <div className={styles.pay}>
                  <div className={styles.bank}>
                    <div className={styles.text}>
                      <BpCheckbox />
                      <p>Bank</p>
                    </div>
                    <img src={bank} alt="" />
                  </div>
                  <div>
                    <BpCheckbox />
                    <p>Cash on delivery</p>
                  </div>
                </div>
                <div className={styles.btns}>
                  <input type="text" placeholder="Coupon Code" />
                  <button>Apply Coupon</button>
                </div>
                <button
                  type="submit"
                  onChange={handleChange}
                  onClick={() => clearAll()}
                  className={styles.place}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
