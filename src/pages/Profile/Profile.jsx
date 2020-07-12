import React, { useEffect } from "react";
import "./Profile.css";
import userLogo from "../../img/userLogo.png";
import { useSelector, useDispatch } from "react-redux";
import products from "../../data/products";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { name, email, phone, productsPosted } = useSelector(
    (state) => state.userDetails
  );

  useEffect(() => {
      
  }, [])

  return (
    <div className="profile" data-testid="profile">
      <div className="profile__pic">
        <img src={userLogo} alt="userLogo" className="profile__pic_userLogo" />
      </div>

      <div className="profile__details">name : {name}</div>
      <div className="profile__details">email : {email}</div>
      <div className="profile__details">phone : {phone}</div>

      <div className="profile__products_posted">
        {productsPosted &&
          productsPosted.map((product) => (
            <div className="profile__products_posted__product">
              {product.id}
              {product.name}
              {product.price}
              <Link className="product_info_link" to={`/product/${product.id}`}>
                Edit
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
