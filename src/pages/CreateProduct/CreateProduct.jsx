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
  //   const { id } = useParams();

  //   const product = products.find((item) => id == item.id);

  const [imageURLs, setImageURLs] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);

  const handleOnSubmitClick = () => {
    console.log(`handleOnSubmitClick`);
  };

  return (
    <div className="product" data-testid="product">
      <Link className="product_info_link" to={`/products`}>
        🔙
      </Link>
      <ItemGallery>
        {imageURLs &&
          imageURLs.map((image, index) =>
            image === null ? (
              <div className="">➕</div>
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

      <div className="product__info">
        <Input
          value={name}
          //   className="search_input_wrapper_display"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={category}
          //   className="search_input_wrapper_display"
          onChange={(e) => setCategory(e.target.value)}
          options={categories}
        />
        <Input
          value={location}
          //   className="search_input_wrapper_display"
          onChange={(e) => setLocation(e.target.value)}
          options={locations}
        />
        <Input
          value={condition}
          //   className="search_input_wrapper_display"
          onChange={(e) => setCondition(e.target.value)}
          options={conditions}
        />
        <Input
          value={price}
          //   className="search_input_wrapper_display"
          onChange={(e) => setPrice(e.target.value)}
        />
        {/* <h3>{product.name}</h3>
        <h4>Condition : {product.condition}</h4>
        <h4>Category : {product.category}</h4>
        <p>{product.desc}</p>
        <div className="product__footer">
          <div className="product__footer_item">{product.location}</div>
          <Button
            value={text.product.submit}
            onClick={() => handleOnSubmitClick()}
          />
          <div className="product__footer_item">{product.price}</div>
        </div> */}
      </div>
    </div>
  );
};

export default CreateProduct;
