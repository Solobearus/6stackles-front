import React, { useRef } from 'react'
import './ImageInGallery.css'


const ImageInGallery = ({ image, name, index, chosenImage, setChosenImage }) => {

    const theImage = useRef(null);

    const handleClickOnImage = () => {
        const currentImage = theImage.current;
        if (chosenImage === null) {
            currentImage.setAttribute("style", `
                transform: scale(2.1) translateX(${index % 2 ? -25 : 25}%) translateY(${index < 2 ? 25 : -25}%);
                z-index: 1;
            `);
            setChosenImage(index);
        } else {
            currentImage.setAttribute("style", "transform: initial; z-index: 1;");
            setTimeout(() => {
                currentImage.setAttribute("style", "z-index: initial;");
            }, 500);
            setChosenImage(null);
        }
    }

    return (
        <div
            className={`imageInGallery_container`}
            ref={theImage}
            onClick={() => handleClickOnImage(index)}
        >
            <img
                className="imageInGallery_img"
                src={`${image}`}
                alt={`${name}_${index}`}>
            </img>
        </div>
    )
}

export default ImageInGallery
