import React, { useEffect } from "react";
import { BiDollar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";

/**
 * @author
 * @function ClothingAndAccessoires
 **/

const ClothingAndAccessoires = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      <Card
        style={{ boxSizing: "border-box", padding: "10px", display: "flex" }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={generatePublicUrl(product.productPictures[0].img)} />
            </Link>
            <div className="caProductName">{product.name}</div>
            <div className="caProductPrice">
              <BiDollar />
              {product.price}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessoires;
