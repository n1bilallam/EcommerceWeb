import React, { useState } from "react";
import Card from "../../UI/Card";
import emptyCart from "../../../images/emptyCart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
/**
 * @author
 * @function EmptyCart
 **/

const EmptyCart = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card
          headerLeft={"My Cart"}
          style={{
            width: " 100%",
            fontSize: "20px",
            border: "none",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img className="emptyImage" src={emptyCart} />
            <div style={{ padding: "0px 10px" }}>Missing Cart items?</div>

            {!auth.authanticate ? (
              <>
                <div style={{ padding: "20px 10px", fontSize: "14px" }}>
                  <strong>Login</strong> to see the items you added previously
                </div>
              </>
            ) : (
              <>
                <div style={{ padding: "20px 10px", fontSize: "14px" }}>
                  Explorer our store we have all
                </div>
                <Link className="linkPage" to="/">
                  Explorer
                </Link>
              </>
            )}
          </div>
        </Card>
      </div>
      <footer style={{ padding: "10px 0" }}>
        <hr />
        <div className="footer" style={{ textAlign: "center" }}>
          <div style={{ display: "flex" }}>
            <div className="policies" style={{ textAlign: "center" }}>
              <span>Policies:</span>
              <Link className="Link">Returns Policy</Link>
              <span>|</span>
              <Link className="Link">Security</Link>
              <span>|</span>
              <Link className="Link">Privacy</Link>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "0px 30px",
                display: "column",
              }}
            >
              <span>© 2020 shopstore.com</span>
            </div>
            <div style={{ display: "inline" }}>
              <span>
                Need help? <Link>Contact Us</Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default EmptyCart;
