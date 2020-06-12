import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageInGallery from './ImageInGallery'

afterEach(cleanup)

describe('ImageInGallery component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<ImageInGallery {...props}/>);
        const linkElement = getByTestId('ImageInGallery');
        expect(linkElement).toBeInTheDocument();
    });
});