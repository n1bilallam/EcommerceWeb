import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import CartItem from "./CartItem";
import { addToCart, getCartItems } from "../../actions";
/**
 * @author
 * @function CartePage
 **/

const CartePage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [cartItems, setcartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setcartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authanticate) {
      dispatch(getCartItems());
    }
  }, [auth.authanticate]);

  const onQuantityIncrement = (_id, qty) => {
    //console.log(_id, qty);
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }), 1);
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft={"My Cart"} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              key={index}
              cartItem={cartItems[key]}
            ></CartItem>
          ))}
        </Card>
        <Card style={{ width: "500px" }} headerLeft="Price"></Card>
      </div>
    </Layout>
  );
};

export default CartePage;
