import React from 'react'
import './ItemGallery.css'
import { useState } from 'react'
import ItemInGallery from '../ItemInGallery/ItemInGallery'

const ItemGallery = ({ children }) => {

    const [chosenItem, setChosenItem] = useState(null)

    return (
        < div className="itemGallery" data-testid="itemGallery">
            {children && children.map((child, index) =>
                <ItemInGallery
                    index={index}
                    chosenItem={chosenItem}
                    setChosenItem={setChosenItem}>
                    {child}
                </ItemInGallery>
            )}
        </div >

    )
}

export default ItemGallery
