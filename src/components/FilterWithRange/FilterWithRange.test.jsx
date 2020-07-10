import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FilterWithRange from './FilterWithRange'

afterEach(cleanup)

describe('FilterWithRange component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<FilterWithRange {...props}/>);
        const linkElement = getByTestId('FilterWithRange');
        expect(linkElement).toBeInTheDocument();
    });
});