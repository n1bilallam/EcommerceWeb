import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsListPage from "./containers/ProductsListPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartePage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import OrdersPage from "./containers/OrdersPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authanticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authanticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authanticate]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartePage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrdersPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductsListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
