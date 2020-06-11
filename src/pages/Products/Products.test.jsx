import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Products from './Products'

afterEach(cleanup)

describe('Products component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Products {...props}/>);
        const linkElement = getByTestId('Products');
        expect(linkElement).toBeInTheDocument();
    });
});