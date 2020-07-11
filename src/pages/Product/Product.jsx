import React from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Button from "../../components/Button/Button";
import text from "../../locales/en";

const Product = ({ images }) => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();

  const product = products.find((item) => id == item.id);

  return (
    <div className="product" data-testid="product">
      <ItemGallery>
        {product.imgUrls &&
          product.imgUrls.map((image, index) => (
            <img
              key={`${index}`}
              className="itemInGallery__img"
              src={`${image}`}
              alt={`${product.name}_${index}`}
            ></img>
          ))}
      </ItemGallery>

      <div className="product__info">
        <h3>{product.name}</h3>
        <h4>Condition : {product.condition}</h4>
        <h4>Category : {product.category}</h4>
        <p>{product.desc}</p>
        <div className="product__footer">
          <div className="product__footer_item">{product.location}</div>
          <Button
            value={text.product.submit}
            onClick={() => console.log(`test`)}
          />
          <div className="product__footer_item">{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
