import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Input from './Input'

afterEach(cleanup)

describe('Input component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Input {...props}/>);
        const linkElement = getByTestId('Input');
        expect(linkElement).toBeInTheDocument();
    });
});