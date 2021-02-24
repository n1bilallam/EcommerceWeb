import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem } from "../../actions";
import { MaterialButton } from "../../components/MaterialUI";
import PriceDetails from "../../components/PriceDetails";
import EmptyCart from "../../components/Pages/EmptyCart";

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

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
            key={index}
            cartItem={cartItems[key]}
          ></CartItem>
        ))}
      </>
    );
  }

  return (
    <Layout>
      {Object.keys(cart.cartItems).length !== 0 ? (
        <div className="cartContainer" style={{ alignItems: "flex-start" }}>
          <Card
            headerLeft={"My Cart"}
            headerRight={<div>Deliver to</div>}
            style={{ width: "calc(100% -400px)", overflow: "hidden" }}
          >
            {Object.keys(cartItems).map((key, index) => (
              <CartItem
                onQuantityInc={onQuantityIncrement}
                onQuantityDec={onQuantityDecrement}
                onRemoveCartItem={onRemoveCartItem}
                key={index}
                cartItem={cartItems[key]}
              ></CartItem>
            ))}
            <div
              style={{
                width: "100%",
                display: "flex",
                background: "#fff",
                justifyContent: "flex-end",
                boxShadow: "0 0 10px 10px #eee",
                padding: "10px 0",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "250px",
                }}
              >
                <MaterialButton
                  title="Place Order"
                  onClick={() => props.history.push("/checkout")}
                />
              </div>
            </div>
          </Card>
          <PriceDetails
            totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
              return qty + cart.cartItems[key].qty;
            }, 0)}
            totalPrice={Object.keys(cart.cartItems).reduce(function (
              totalPrice,
              key
            ) {
              const { price, qty } = cart.cartItems[key];
              return totalPrice + price * qty;
            },
            0)}
          />
        </div>
      ) : (
        <EmptyCart />
      )}
    </Layout>
  );
};

export default CartePage;
