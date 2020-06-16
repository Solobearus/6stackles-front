import React, { useRef } from 'react'
import './ItemInGallery.css'


const ItemInGallery = ({ index, chosenItem, setChosenItem, children }) => {

    const theItem = useRef(null);

    const handleClickOnItem = () => {
        const currentItem = theItem.current;
        if (chosenItem === null) {
            currentItem.setAttribute("style", `
                transform: scale(2.1) translateX(${index % 2 ? -25 : 25}%) translateY(${index < 2 ? 25 : -25}%);
                z-index: 1;
            `);
            setChosenItem(index);
        } else {
            currentItem.setAttribute("style", "transform: initial; z-index: 1;");
            setTimeout(() => {
                currentItem.setAttribute("style", "z-index: initial;");
            }, 500);
            setChosenItem(null);
        }
    }

    const childrenWithExtraProp = React.Children.map(children, child =>
        React.cloneElement(child, { opened: chosenItem === null })
    );

    return (
        <div
            className={`itemInGallery_container`}
            ref={theItem}
            onClick={() => handleClickOnItem()}
        >
            {childrenWithExtraProp}
        </div>
    )
}

export default ItemInGallery