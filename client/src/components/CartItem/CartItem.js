import React, { useState, useRef, useEffect } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartItem = ({ item, cartQuantity, dispatch, action }) => {
  const [quantity, setQuantity] = useState(cartQuantity);
  const quantityRef = useRef(cartQuantity);

  useEffect(() => {
    if (quantity !== quantityRef.current) {
      quantityRef.current = quantity;
      dispatch({
        type: action,
        payload: {
          item,
          quantity,
        },
      });
    }
  }, [quantity, action, dispatch, item]);

  return (
    quantity >= 0 && (
      <>
        <p>{item} </p>
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          location={"cart"}
        />
      </>
    )
  );
};

export default CartItem;
