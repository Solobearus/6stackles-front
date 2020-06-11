import React from 'react'
import './ImageGallery.css'


const ImageGallery = ({ images, name }) => {
    return (
        < div className="imageGallery" data-testid="imageGallery">
            {images && images.map((image, index) =>
                <div className="imageGallery_container" >
                    <img
                        className="imageGallery_img"
                        src={`${image}`}
                        alt={`${name}_${index}`}>
                    </img>
                </div>
            )
            }
        </div >
    )
}

export default ImageGallery
