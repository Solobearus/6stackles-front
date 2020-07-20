import React, { useEffect, useCallback, useState } from "react";
import "./Profile.css";
import userLogo from "../../img/userLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDetailsSlice } from "../../store/slices";
import Button from "../../components/Button/Button";
import { verify, getProductByAuthorId } from "../../api";

const Profile = () => {
  const { name, email, phone, productsPosted } = useSelector((state) => state.userDetails);

  const dispatch = useCallback(useDispatch(), []);
  const [error, setError] = useState("");

  useEffect(() => {
    const func = async () => {
      const userDetails = await verify(localStorage.getItem("token"));
      console.log(userDetails)
      const userProducts = await getProductByAuthorId(userDetails._id);
      console.log(userProducts);
      if(userProducts.error){
        setError(userProducts.error)
      }else{
        dispatch(userDetailsSlice.actions.setProductsPostedByUser(userProducts));
      }
    };
    func();
  }, []);

  return (
    <div className="profile" data-testid="profile">
      <div className="profile__pic">
        <img src={userLogo} alt="userLogo" className="profile__pic_userLogo" />
      </div>

      <div className="profile__details">name : {name}</div>
      <div className="profile__details">email : {email}</div>
      <div className="profile__details">phone : {phone}</div>
      <div className="error">{error}</div>
      <div className="profile__products_posted">
        {productsPosted &&
          Array.isArray(productsPosted) &&
          productsPosted.map((product) => (
            <div className="profile__products_posted__product" key={`${product._id}`}>
              <div className="">id : {product._id}</div>
              <div className="">name : {product.name}</div>
              <div className="">price : {product.price}</div>
              <div className="">
                <Link className="product_info_link" to={`/products/edit/${product._id}`}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>

      <Link className="product_info_link" to={`/products/create`}>
        <Button value="Add New"></Button>
      </Link>
    </div>
  );
};

export default Profile;
