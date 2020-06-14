import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from './Search'

afterEach(cleanup)

describe('Search component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Search {...props}/>);
        const linkElement = getByTestId('Search');
        expect(linkElement).toBeInTheDocument();
    });
});