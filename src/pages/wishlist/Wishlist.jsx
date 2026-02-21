import React, { useEffect } from "react";
import scss from "./Wishlist.module.scss";
import { useProduct } from "../../context/MainContext";
import { BsTrash3 } from "react-icons/bs";
import JustFor from "../../components/justForYou/JustFor";
const Wishlist = () => {
  const { wishlist, deleteWishlist, readWishlist } = useProduct();
  useEffect(() => {
    readWishlist();
  }, []);
  return (
    <div className="container">
      <div className={scss.top}>
        <h5>Wishlist ({wishlist.length})</h5>
        <button>Move All To Bag</button>
      </div>

      <div className={scss.today_cards}>
        {wishlist.map((item, idx) => (
          <div key={idx} className={scss.today_card}>
            <img src={item.img} alt={item.name} />
            <div className={scss.img}>
              {/* <div className={scss.sale}>
                <span id="sale">
                  <p>-35%</p>
                </span>
              </div> */}
              <span>
                <button onClick={() => deleteWishlist(item._id)}>
                  <BsTrash3 size={20} color="black" />
                </button>
              </span>
            </div>
            <button className={scss.cart}>Add To Cart</button>
            <div className={scss.card_text}>
              <div className={scss.name}>
                <h4>{item.name}</h4>
              </div>
              <div className={scss.price}>
                <h4>${item.price}</h4>
                {/* <p>${}</p> */}
              </div>
              {/* <div className={scss.stars}>
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <JustFor />
    </div>
  );
};

export default Wishlist;
