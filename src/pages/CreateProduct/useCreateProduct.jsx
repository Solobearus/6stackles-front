import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productsSlice, searchSlice } from "../../store/slices";
import { useParams } from "react-router-dom";
import { fetchCategories,fetchCreateProduct } from "../../api";

export const useCreateProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id: paramsId } = useParams();

  const { text } = useSelector((state) => state.language);
  const { products } = useSelector((state) => state.products);
  const { categories, conditions, locations } = useSelector((state) => state.search);
  const { id: userId, productsPosted } = useSelector((state) => state.userDetails);

  const product = products.find((product) => paramsId === product.id);

  const [images, setImages] = useState(product ? product.images : [null, null, null, null]);
  const [name, setName] = useState(product ? product.name : "test");
  const [category, setCategory] = useState(product ? product.category : "Hat");
  const [location, setLocation] = useState(product ? product.location : "Israel");
  const [condition, setCondition] = useState(product ? product.condition : "Good");
  const [description, setDescription] = useState(product ? product.desc : "testtesttesttest");
  const [price, setPrice] = useState(product ? product.price : 0);
  const [error, setError] = useState("");

  useEffect(() => {
    const func = async () => {
      const categories = await fetchCategories();
      const categoriesArray = categories.map((category) => category.name);
      dispatch(searchSlice.actions.setCategories(categoriesArray));
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
      // const randomId = Math.random() * 99999 + "";
      const createProductResult = await fetchCreateProduct({
        // id: randomId,
        authorId: userId,
        name,
        category,
        condition,
        description,
        images,
        price,
        location,
      });
      console.log("createProductResult");
      console.log(createProductResult);
      // dispatch(productsSlice.actions.addProduct());

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
