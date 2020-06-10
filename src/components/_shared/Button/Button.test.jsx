import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

afterEach(cleanup)

describe('Button component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Button {...props}/>);
        const linkElement = getByTestId('Button');
        expect(linkElement).toBeInTheDocument();
    });
});