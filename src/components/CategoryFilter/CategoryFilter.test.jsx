import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CategoryFilter from './CategoryFilter'

afterEach(cleanup)

describe('CategoryFilter component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<CategoryFilter {...props}/>);
        const linkElement = getByTestId('CategoryFilter');
        expect(linkElement).toBeInTheDocument();
    });
});