import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productsSlice, searchSlice } from "../../store/slices";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchCreateProduct, fetchProduct } from "../../api";

export const useCreateProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id: paramsId } = useParams();

  const { text } = useSelector((state) => state.language);
  const { categories, conditions, locations } = useSelector((state) => state.search);
  const { id: userId, productsPosted } = useSelector((state) => state.userDetails);

  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("test");
  const [category, setCategory] = useState("Hat");
  const [location, setLocation] = useState("Israel");
  const [condition, setCondition] = useState("Good");
  const [description, setDescription] = useState("testtesttesttest");
  const [price, setPrice] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    const func = async () => {
      const categories = await fetchCategories();
      const categoriesArray = categories.map((category) => category.name);
      dispatch(searchSlice.actions.setCategories(categoriesArray));

      if (paramsId) {
        const product = await fetchProduct(paramsId);
        if (!product.error) {
          setImages(product.images);
          setName(product.name);
          setCategory(product.category);
          setLocation(product.location);
          setCondition(product.condition);
          setDescription(product.description);
          setPrice(product.price);
        } else {
          //TODO: change to text
          setError("could not find a product with this id");
        }
      }
    };
    func();
  }, []);

  const handleOnSubmitClick = async () => {
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
      const token = localStorage.getItem("token");
      console.log("images")
      console.log(images)

      const createProductResult = await fetchCreateProduct(
        {
          authorId: userId,
          name,
          category,
          condition,
          description,
          images,
          price,
          location,
        },
        token
      );
      console.log("createProductResult");
      console.log(createProductResult);

      history.push(`/product/${createProductResult._id}`);
    }
  };

  const onImageChange = (image, index) => {
    const newImageURLs = [...images];
    newImageURLs[index] = URL.createObjectURL(image.files[0]);
    setImages(newImageURLs);
  };

  return {
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
  };
};
