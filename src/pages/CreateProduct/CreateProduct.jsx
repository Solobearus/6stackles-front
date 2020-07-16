import React, { useState } from "react";
import "./CreateProduct.css";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { useCreateProduct } from "./useCreateProduct";
const CreateProduct = () => {
  const {
    images,
    onImageChange,
    name,
    text,
    setName,
    category,
    setCategory,
    categories,
    location,
    setLocation,
    locations,
    condition,
    setCondition,
    conditions,
    price,
    setPrice,
    description,
    setDescription,
    error,
    handleOnSubmitClick,
  } = useCreateProduct();

  return (
    <div className="create_product" data-testid="create_product">
      <Link className="create_product_info_link" to={`/products`}>
        🔙
      </Link>
      <ItemGallery>
        {images &&
          images.map((image, index) =>
            image === null ? (
              <div className="create_product__input_pic" key={`${index}`}>
                <label
                  htmlFor={`files_${index}`}
                  className="create_product__input_pic__label"
                >
                  ➕
                </label>
                <input
                  id={`files_${index}`}
                  style={{ visibility: "hidden" }}
                  type="file"
                  className="create_product__input_pic"
                  accept="image/*"
                  onChange={(e) => onImageChange(e.target, index)}
                ></input>
              </div>
            ) : (
              <img
                key={`${index}`}
                className="itemInGallery__img"
                src={`${image}`}
                alt={`${name}_${index}`}
              ></img>
            )
          )}
      </ItemGallery>

      <div className="create_product__info">
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.name}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.category}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={categories}
          />
        </div>
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.location}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            options={locations}
          />
        </div>
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.condition}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            options={conditions}
          />
        </div>
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.price}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="create_product__info__input_group">
          <span className="create_product__info__input_group__span">
            {text.default.createProduct.description}
          </span>
          <Input
            className={`create_product__info__input_group__input`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {error && <div className="error">{error}</div>}
        <Button
          value={text.default.generic.submit}
          onClick={() => handleOnSubmitClick()}
        />
      </div>
    </div>
  );
};

export default CreateProduct;
