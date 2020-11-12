import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import Card from "../../../components/UI/Card";
/**
 * @author
 * @function ProductPage
 **/

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;
  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  return (
    <div className="carousele">
      <h3 className="carousele__title">{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a key={index} className="carousele__url" href={banner.navigateTo}>
              <div>
                <img src={banner.img} alt="" />
              </div>
            </a>
          ))}
      </Carousel>
      <div className="product__part">
        {page.products &&
          page.products.map((product, index) => (
            <Card key={index} className="card__product">
              <img className="product__img" src={product.img} alt="" />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
