import React from 'react';

import {
    ProductPreviewStyles,
    ProductImage,
    ProductPrice,
    ProductName,
    ProductDescription,
} from './styles';

import PlaceHolderImage from 'assets/images/ProductCardImage.png';

function ProductPreview({ children, productName, ...props }) {
    return (
        <ProductPreviewStyles {...props}>
            <ProductImage>
                <img src={PlaceHolderImage} alt="Product Placeholder" />
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>price</ProductPrice>
            <ProductDescription>
                Worldlets citizens of distant epochs the carbon in our apple
                pies Euclid Drake Equation Vangelis? White dwarf another world
                made in the interiors of collapsing stars realm of the galaxies
                extraordinary claims require extraordinary evidence a mote of
                dust suspended in a sunbeam.
            </ProductDescription>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;
