import React, { useState } from "react";
import "./CreateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import Button from "../../components/Button/Button";
import text from "../../locales/en";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const CreateProduct = () => {
  const { categories, conditions, locations } = useSelector(
    (state) => state.search
  );

  const { text } = useSelector((state) => state.language);

  const [imageURLs, setImageURLs] = useState([null, null, null, null]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);

  const [error, setError] = useState("");

  const handleOnSubmitClick = () => {
    if (name.trim() === "") {
      setError("Error: please choose a name for the product");
      return;
    }
    if (category.trim() === "" || !categories.includes(category.trim())) {
      setError("Error: Please choose a category for the product from the list");
      return;
    }
    if (location.trim() === "" || !locations.includes(location.trim())) {
      setError("Error: Please choose a location for the product from the list");
      return;
    }
    if (condition.trim() === "" || !conditions.includes(condition.trim())) {
      setError(
        "Error: Please choose a condition for the product from the list"
      );
      return;
    }
    if (price < 0) {
      setError("Error: Please choose a valid price for your product");
      return;
    }
  };

  const onImageChange = (image, index) => {
    console.log(image.files[0]);
    const newImageURLs = [...imageURLs];
    newImageURLs[index] = URL.createObjectURL(image.files[0]);
    setImageURLs(newImageURLs);
  };

  return (
    <div className="create_product" data-testid="create_product">
      <Link className="create_product_info_link" to={`/products`}>
        🔙
      </Link>
      <ItemGallery>
        {imageURLs &&
          imageURLs.map((image, index) =>
            image === null ? (
              <div className="create_product__input_pic">
                <label for={`files_${index}`} class="btn">
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
          <span>{text.default.createProduct.name}</span>
          <Input
            className={`create_product__info__input_group__input`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create_product__info__input_group">
          <span>{text.default.createProduct.category}</span>
          <Input
            className={`create_product__info__input_group__input`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={categories}
          />
        </div>
        <div className="create_product__info__input_group">
          <span>{text.default.createProduct.location}</span>
          <Input
            className={`create_product__info__input_group__input`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            options={locations}
          />
        </div>
        <div className="create_product__info__input_group">
          <span>{text.default.createProduct.condition}</span>
          <Input
            className={`create_product__info__input_group__input`}
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            options={conditions}
          />
        </div>
        <div className="create_product__info__input_group">
          <span>{text.default.createProduct.price}</span>
          <Input
            className={`create_product__info__input_group__input`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
