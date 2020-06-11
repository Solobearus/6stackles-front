import React from 'react'
import './Button.css'


const Button = ({ value, onClick }) => {
    return (
        < button
            className="button"
            data-testid="button"
            onClick={onClick}>
            {value}
        </button >
    )
}

export default Button
