import React, { useState } from "react";
import "./CreateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { productsSlice } from "../../store/slices";
import { useParams } from "react-router-dom";

const CreateProduct = () => {
  const { categories, conditions, locations } = useSelector(
    (state) => state.search
  );
  const { text } = useSelector((state) => state.language);
  const { id: userId, productsPosted } = useSelector(
    (state) => state.userDetails
  );
  const { products } = useSelector((state) => state.products);

  const { id: paramsId } = useParams();

  const product = products.find((product) => paramsId === product.id);

  const history = useHistory();
  const dispatch = useDispatch();

  const [images, setImages] = useState(
    product ? product.images : [null, null, null, null]
  );

  const [name, setName] = useState(product ? product.name : "test");
  const [category, setCategory] = useState(product ? product.category : "Hat");
  const [location, setLocation] = useState(
    product ? product.location : "Israel"
  );
  const [condition, setCondition] = useState(
    product ? product.condition : "Good"
  );
  const [description, setDescription] = useState(
    product ? product.desc : "testtesttesttest"
  );
  const [price, setPrice] = useState(product ? product.price : 0);

  const [error, setError] = useState("");

  const handleOnSubmitClick = () => {
    if (name.trim() === "") {
      setError(text.default.error[1000]);
      return;
    }
    if (category.trim() === "" || !categories.includes(category.trim())) {
      setError(text.default.error[1001]);
      return;
    }
    if (location.trim() === "" || !locations.includes(location.trim())) {
      setError(text.default.error[1002]);
      return;
    }
    if (condition.trim() === "" || !conditions.includes(condition.trim())) {
      setError(text.default.error[1003]);
      return;
    }
    if (price < 0) {
      setError(text.default.error[1004]);
      return;
    }
    if (description.trim().length < 10 || description.trim().length > 500) {
      setError(text.default.error[1005]);
      return;
    }
    if (paramsId) {
      if (productsPosted.find((product) => product.authorId === userId)) {
        dispatch(
          productsSlice.actions.editProduct({
            id: paramsId,
            authorId: userId,
            name,
            category,
            condition,
            desc: description,
            images,
            price,
            location,
          })
        );
        history.push(`/product/${paramsId}`);
      } else {
        console.log(`error at submit`);
        setError(text.default.error[2000]);
      }
    } else {
      const randomId = Math.random() * 99999 + "";
      dispatch(
        productsSlice.actions.addProduct({
          id: randomId,
          authorId: userId,
          name,
          category,
          condition,
          desc: description,
          images,
          price,
          location,
        })
      );
      history.push(`/product/${randomId}`);
    }
  };

  const onImageChange = (image, index) => {
    const newImageURLs = [...images];
    newImageURLs[index] = URL.createObjectURL(image.files[0]);
    setImages(newImageURLs);
  };

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
