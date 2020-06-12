import React from 'react'
import './ImageGallery.css'
import { useState } from 'react'
import ImageInGallery from '../ImageInGallery/ImageInGallery'

const ImageGallery = ({ images, name }) => {

    const [chosenImage, setChosenImage] = useState(null)

    return (
        < div className="imageGallery" data-testid="imageGallery">
            {images && images.map((image, index) =>
                <ImageInGallery
                    image={image}
                    name={name}
                    index={index}
                    chosenImage={chosenImage}
                    setChosenImage={setChosenImage} />
            )}
        </div >
    )
}

export default ImageGallery
