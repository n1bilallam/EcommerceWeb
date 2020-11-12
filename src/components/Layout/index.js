import React from "react";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <div>
      <Header />
      <MenuHeader />
      {props.children}
    </div>
  );
};

export default Layout;
