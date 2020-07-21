import React, { useEffect, useCallback, useState } from "react";
import "./Profile.css";
import userLogo from "../../img/userLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userDetailsSlice } from "../../store/slices";
import Button from "../../components/Button/Button";
import { verify, getProductByAuthorId, getUser } from "../../api";

const Profile = () => {
  const { name, email, phone, productsPosted, profilePicURL } = useSelector((state) => state.userDetails);

  const dispatch = useCallback(useDispatch(), []);
  const [error, setError] = useState("");
  let history = useHistory();

  useEffect(() => {
    const func = async () => {
      const userVerification = await verify(localStorage.getItem("token"));

      if (userVerification.err) {
        history.push('./signIn');
      }

      const userDetails = await getUser(userVerification._id);
      userDetails && (userDetails.error ? setError(userDetails.error) : dispatch(userDetailsSlice.actions.setUser(userDetails)));

      const userProducts = await getProductByAuthorId(userVerification._id);
      userProducts && (userProducts.error ? setError(userProducts.error) : dispatch(userDetailsSlice.actions.setProductsPostedByUser(userProducts)));
    };
    func();
  }, []);

  return (
    <div className="profile" data-testid="profile">
      <div className="profile__pic">
        {console.log(profilePicURL)}
        <img src={profilePicURL ? profilePicURL : userLogo} alt="userLogo" className="profile__pic_userLogo" />
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
