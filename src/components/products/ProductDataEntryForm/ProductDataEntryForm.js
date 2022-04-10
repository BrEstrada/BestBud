import React from 'react';

import {
    ProductDataEntryFormStyles,
    ProductDescription,
    ProductImage,
    ProductName,
    ProductPrice,
} from './styles';

import { Label, Input } from 'ui/forms';
import { ProductImageDropBox } from '../ProductImageDropBox';
import { TextArea } from 'ui/forms/textarea';

function ProductDataEntryForm({ children, handleProductName, ...props }) {
    return (
        <ProductDataEntryFormStyles {...props}>
            <ProductImage>
                <Label>Product Image</Label>
                <ProductImageDropBox />
            </ProductImage>
            <fieldset>
                <ProductName>
                    <Label>Product Name</Label>
                    <Input
                        onChange={(e) =>
                            handleProductName(e.target.value.trim())
                        }
                        maxLength={30}
                    />
                </ProductName>

                <ProductPrice>
                    <Label>Product Price</Label>
                    <Input />
                </ProductPrice>
            </fieldset>
            <ProductDescription>
                <Label>Product Description</Label>
                <TextArea rows={6} />
            </ProductDescription>
        </ProductDataEntryFormStyles>
    );
}

export default ProductDataEntryForm;
