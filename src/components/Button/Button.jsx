import React from 'react'
import './Button.css'


const Button = ({ value, onClick, className }) => {
    return (
        < button
            className={`button ${className}`}
            data-testid="button"
            onClick={onClick}>
            {value}
        </button >
    )
}

export default Button
