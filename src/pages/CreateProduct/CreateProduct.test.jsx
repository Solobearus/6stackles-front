import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateProduct from './CreateProduct'

afterEach(cleanup)

describe('CreateProduct component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<CreateProduct {...props}/>);
        const linkElement = getByTestId('CreateProduct');
        expect(linkElement).toBeInTheDocument();
    });
});