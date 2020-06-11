import React from 'react'
import './Product.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from '../../components/ImageGallery/ImageGallery'

const Product = ({ images }) => {

    const { products } = useSelector((state) => state.products);
    const { id } = useParams();
    return (
        < div className="product" data-testid="product">
            <ImageGallery images={products[id].imgUrls} name={products[id].name} ></ImageGallery>
        </div >
    )
}

export default Product
