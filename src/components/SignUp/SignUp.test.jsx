import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignUp from './SignUp'

afterEach(cleanup)

describe('SignUp component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<SignUp {...props}/>);
        const linkElement = getByTestId('SignUp');
        expect(linkElement).toBeInTheDocument();
    });
});