import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageGallery from './ItemGallery'

afterEach(cleanup)

describe('ImageGallery component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<ImageGallery {...props}/>);
        const linkElement = getByTestId('ImageGallery');
        expect(linkElement).toBeInTheDocument();
    });
});