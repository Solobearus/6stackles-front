import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

afterEach(cleanup)

describe('Header component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Header {...props}/>);
        const linkElement = getByTestId('Header');
        expect(linkElement).toBeInTheDocument();
    });
});