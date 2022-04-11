import React from 'react';

import {
    ProductPreviewStyles,
    ProductImage,
    ProductPrice,
    ProductName,
    ProductDescription,
} from './styles';

function ProductPreview({
    children,
    productName,
    productPrice,
    productImage,
    productDescription,
    ...props
}) {
    return (
        <ProductPreviewStyles {...props}>
            <ProductImage>
                <img
                    src={productImage}
                    alt="Product Placeholder"
                    width="320"
                    height="184"
                />
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;
