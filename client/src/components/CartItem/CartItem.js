import React, { useState, useRef, useEffect } from "react";
import NumberFormat from "react-number-format";
import "./CartItem.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartItem = (props) => {
  const { image, item, price, cartQuantity, dispatch, action } = props;
  const [quantity, setQuantity] = useState(cartQuantity);
  const quantityRef = useRef(cartQuantity);

  useEffect(() => {
    if (quantity !== quantityRef.current) {
      quantityRef.current = quantity;
      dispatch({
        type: action,
        payload: {
          image,
          item,
          price,
          quantity,
        },
      });
    }
  }, [image, price, quantity, action, dispatch, item]);

  return (
    quantity >= 0 && (
      <div className="cart-item">
        <img className="cart-item__thumbnail" src={image} alt={item} />
        <p className="cart-item__name">{item} </p>
        <NumberFormat
          className="cart-item__price"
          value={price}
          prefix="$"
          displayType={"text"}
          thousandSeparator={true}
        />
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          location={"cart"}
        />
      </div>
    )
  );
};

export default CartItem;
