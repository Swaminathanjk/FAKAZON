import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


function CheckoutProduct({ id, image, title, price, rating }){
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    // toast("Item removed from basket!");
  };


    return (
        <div className="checkoutProduct">
          <img src={image} alt="" className="checkoutProduct_image" />
          <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
              <small>Rs.</small>
              <strong>{price}</strong>
            </p>
            <p className="checkoutProduct_rating">
              {Array(rating)
                .fill()
                .map((rate) => (
                  <p>⭐</p>
                ))}
            </p>
            <button onClick={removeFromBasket}>
              Remove from Basket
            
            </button>
          </div>
        </div>
      );
    }

export default CheckoutProduct