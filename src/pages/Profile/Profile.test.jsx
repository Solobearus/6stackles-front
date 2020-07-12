import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Profile from './Profile'

afterEach(cleanup)

describe('Profile component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Profile {...props}/>);
        const linkElement = getByTestId('Profile');
        expect(linkElement).toBeInTheDocument();
    });
});