import React, { useEffect } from "react";
import { getOrders } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./style.css";
import { generatePublicUrl } from "../../urlConfig";
import { Breed } from "../../components/MaterialUI";
import { IoIosArrowForward } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import EmptyOrders from "../../components/Pages/EmptyOrders";
/**
 * @author
 * @function OrdersPage
 **/

const OrdersPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {Object.keys(user.orders).length !== 0 ? (
          user.orders.map((order) => {
            return order.items.map((item) => (
              <Card style={{ margin: "5px 0" }}>
                <Link
                  to={`/order_details/${order._id}`}
                  className="orderItemContainer"
                >
                  <div className="orderImgContainer">
                    <img
                      className="orderImg"
                      src={generatePublicUrl(
                        item.productId.productPictures[0].img
                      )}
                    />
                  </div>
                  <div className="orderRow">
                    <div className="orderName ">{item.productId.name}</div>
                    <div className="orderPrice">
                      <BiDollar />
                      {item.payablePrice}
                    </div>
                    <div>{order.paymentStatus}</div>
                  </div>
                </Link>
              </Card>
            ));
          })
        ) : (
          <EmptyOrders />
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;
