import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Product from './Product'

afterEach(cleanup)

describe('Product component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Product {...props}/>);
        const linkElement = getByTestId('Product');
        expect(linkElement).toBeInTheDocument();
    });
});