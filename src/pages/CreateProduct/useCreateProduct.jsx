import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productsSlice, searchSlice } from "../../store/slices";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchCreateProduct, fetchUpdateProduct, fetchProduct } from "../../api";

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

  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const func = async () => {
      const categories = await fetchCategories();
      const categoriesArray = categories.map((category) => category.name);
      dispatch(searchSlice.actions.setCategories(categoriesArray));

      if (paramsId) {
        const product = await fetchProduct(paramsId);
        if (product && !product.error) {
          setImages(product.images);
          setName(product.name);
          setCategory(product.category);
          setLocation(product.location);
          setCondition(product.condition);
          setDescription(product.description);
          setPrice(product.price);
          setEditing(true);
        } else {
          setError(product.error);
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
    const token = localStorage.getItem("token");

    const fetchResult = editing
      ? await fetchUpdateProduct(
          {
            _id: paramsId,
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
        )
      : await fetchCreateProduct(
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

    if (fetchResult.error) {
      setError(fetchResult.error);
      return;
    }
    history.push(`/product/${editing ? paramsId : fetchResult._id}`);
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
