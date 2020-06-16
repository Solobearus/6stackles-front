import React from 'react'
import './Product.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ItemGallery from '../../components/ItemGallery/ItemGallery'
import Button from '../../components/Button/Button'
import text from '../../locales/en'

const Product = ({ images }) => {

    const { products } = useSelector((state) => state.products);
    const { id } = useParams();


    return (
        < div className="product" data-testid="product">
            <ItemGallery>
                {
                    products[id].imgUrls && products[id].imgUrls.map((image, index) =>
                        <img
                            className="itemInGallery_img"
                            src={`${image}`}
                            alt={`${products[id].name}_${index}`}>
                        </img>
                    )
                }
            </ItemGallery>

            <div className="product__info">
                <h3>{products[id].name}</h3>
                <p>{products[id].desc}</p>
                <div className="product__footer">
                    <div className="product__footer_item">{products[id].location}</div>
                    <Button value={text.product.submit} onClick={() => console.log(`test`)} />
                    <div className="product__footer_item">{products[id].price}</div>
                </div>
            </div>
        </div >
    )
}

export default Product
