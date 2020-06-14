import React from 'react'
import './Product.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import Button from '../../components/Button/Button'
import text from '../../locales/en'

const Product = ({ images }) => {

    const { products } = useSelector((state) => state.products);
    const { id } = useParams();


    return (
        < div className="product" data-testid="product">
            <ImageGallery images={products[id].imgUrls} name={products[id].name} ></ImageGallery>

            <div className="product_info">
                <h3>{products[id].name}</h3>
                <p>{products[id].desc}</p>
                <div className="product_footer">
                    <div className="product_footer_item">{products[id].location}</div>
                    <Button value={text.product.submit} onClick={() => console.log(`test`)} />
                    <div className="product_footer_item">{products[id].price}</div>
                </div>
            </div>
        </div >
    )
}

export default Product
