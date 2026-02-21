import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({ children }) => {
  const [product, setProducts] = useState([]);
  // const [checkOut, setCheckOut] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem("orderCounts");
    return saved ? JSON.parse(saved) : {};
  });
  const filterProducts = product.filter((data) =>
    data.name?.toLowerCase().includes((search || "").toLowerCase())
  );
  const increase = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) > 1 ? prev[id] - 1 : +1,
    }));
  };
  useEffect(() => {
    localStorage.setItem("orderCounts", JSON.stringify(counts));
  }, [counts]);

  const API = "https://api-crud.elcho.dev/api/v1/5192e-99c81-b4a2b/store";
  const WISHLIST =
    "https://api-crud.elcho.dev/api/v1/f41ec-01c26-6ce0b/wishlist";
  const CART_API =
    "https://api-crud.elcho.dev/api/v1/c34da-2f219-6bebe/store_cart";
  // const CHECK_OUT =
  //   "https://api-crud.elcho.dev/api/v1/ac625-d7db4-22423/check_out_store";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    readProduct();
  }
  async function readProduct() {
    const { data } = await axios.get(`${API}? =100`);
    setProducts(data.data);
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  const clearAll = async () => {
    try {
      await axios.delete(CART_API); // Или специальный эндпоинт типа CART_API + '/clear'
      setCart([]); // Очищаем стейт только после успешного ответа сервера
      console.log("Корзина успешно очищена в БД");
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error);
    }
  };

  async function addWishlist(newWishlist) {
    await axios.post(WISHLIST, newWishlist);
    readWishlist();
  }
  async function readWishlist() {
    const { data } = await axios.get(`${WISHLIST}?per_page=100`);
    setWishlist(data.data);
  }
  async function deleteWishlist(id) {
    await axios.delete(`${WISHLIST}/${id}`);
    readWishlist();
  }
  // async function addCart(newCart) {
  //   await axios.post(CART_API, newCart);
  //   readCart();
  // }
  async function addCart(newCart) {
    try {
      const response = await axios.get(CART_API);
      const cartArray = response.data.data || [];
      const incomingId = newCart._id || newCart.id;
      const existingItem = cartArray.find(
        (item) => item.originalId === newCart._id
      );

      if (existingItem) {
        await axios.patch(`${CART_API}/${existingItem._id}`, {
          quantity: Number(existingItem.quantity || 1) + 1,
        });
        console.log("Количество обновлено");
      } else {
        const itemToAdd = {
          ...newCart,
          originalId: incomingId,
          quantity: 1,
        };

        delete itemToAdd._id;
        delete itemToAdd.id;

        await axios.post(CART_API, itemToAdd);
        console.log("Товар добавлен");
      }

      readCart();
    } catch (error) {
      console.error(
        "Детальная ошибка API:",
        error.response?.data || error.message
      );
    }
  }
  const updateQuantity = async (cartItem, delta) => {
    const newQty = (cartItem.quantity || 1) + delta;
    if (newQty < 1) return; // Не даем уменьшить меньше 1

    try {
      await axios.patch(`${CART_API}/${cartItem._id}`, { quantity: newQty });
      readCart(); // Обновляем список, чтобы увидеть изменения
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };
  async function readCart() {
    const { data } = await axios.get(`${CART_API}?per_page=100`);
    setCart(data.data);
  }
  async function deleteCart(id) {
    await axios.delete(`${CART_API}/${id}`);
    readCart();
  }
  const totalPrice = cart.reduce((sum, item) => {
    const itemTotal = item.price * item.quantity;
    return sum + itemTotal;
  }, 0);
  // async function addCheckOut(newCheck) {
  //   await axios.post(CHECK_OUT, newCheck);
  //   readCheckOut();
  // }
  // async function readCheckOut() {
  //   const { data } = await axios.get(`${CHECK_OUT}?per_page=100`);
  //   setCheckOut(data.data);
  // }
  // async function deleteCheckOut(id) {
  //   await axios.delete(`${CHECK_OUT}/${id}`);
  //   readCheckOut();
  // }

  const values = {
    filterProducts,
    addProduct,
    readProduct,
    deleteProduct,
    product,
    // addCheckOut,
    // readCheckOut,
    // deleteCheckOut,
    // checkOut,
    addCart,
    readCart,
    deleteCart,
    updateQuantity,
    clearAll,
    cart,
    addWishlist,
    readWishlist,
    deleteWishlist,
    wishlist,
    totalPrice,
    increase,
    decrease,
    counts,
    search,
    setSearch,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
