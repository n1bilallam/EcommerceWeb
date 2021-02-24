import React from "react";
import { IoIosCart } from "react-icons/io";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "#ff6161",
          width: "14px",
          height: "14px",
          borderRadius: "7px",
          fontSize: "12px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-9px",
          right: "-4px",
        }}
      >
        {props.count}
      </span>
      <IoIosCart />
    </div>
  );
};

export default Cart;
