import React, { useState } from "react";
import { useProduct } from "../../../context/MainContext";
import scss from "./AddProduct.module.scss";
import { FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
const AddProduct = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const handleCLick = () => {
    const newProduct = {
      name: name,
      description: description,
      price: price,
      img: img,
      totalPrice,
      quantity,
      id: Date.now(),
    };
    addProduct(newProduct);
    setName("");
    setDescription("");
    setPrice("");
    setImg("");
  };
  return (
    <div className="container">
      <div className={scss.addProduct}>
        <div className={scss.left_product}>
          <h2>Добавление товара</h2>
          <div className={scss.inp}>
            <h5>Введите название товара </h5>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className={scss.inp}>
            <h5>Введедите цену товара</h5>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="$"
            />
          </div>
          <div className={scss.inp}>
            <h5>У вас есть описание? добавьте.</h5>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              value={description}
            />
          </div>
          <div className={scss.inp}>
            <h5>Введите URL картинки товара</h5>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
            />
          </div>
          <button onClick={handleCLick}>Добавить товар</button>
        </div>
        <div className={scss.right_product}>
          <h2>Так будет выглядеть ваш товар</h2>
          <div className={scss.product_card}>
            <img src="" alt="ЗДЕСЬ БУДЕТ КАРТИНКА ТОВАРА" />
            <div className={scss.img}>
              <span>
                <button>
                  <CiHeart size={20} color="black" />
                </button>
                <button>
                  <LuEye size={18} />
                </button>
              </span>
            </div>
            <button className={scss.cart}>Add To Cart</button>
            <div className={scss.product_text}>
              <h4>ЗДЕСЬ НАЗВАНИЕ ТОВАРА</h4>
              <div className={scss.price}>
                <h4>цена</h4>
                <div className={scss.stars}>
                  <div className={scss.star}>
                    <span>
                      <FaStar color="#FFAD33" />
                    </span>
                    <span>
                      <FaStar color="#FFAD33" />
                    </span>
                    <span>
                      <FaStar color="#FFAD33" />
                    </span>
                    <span>
                      <FaStar color="#FFAD33" />
                    </span>
                    <span>
                      <FaStar color="#FFAD33" />
                    </span>
                  </div>
                  <p>(65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
