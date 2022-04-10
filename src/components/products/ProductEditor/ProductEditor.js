import React from 'react';

import { ProductDataEntryForm } from './../ProductDataEntryForm';
import { ProductPreview } from './../ProductPreview';
import { ProductEditorStyles } from './styles';

function ProductEditor({ children, productName, handleProductName, ...props }) {
    return (
        <ProductEditorStyles {...props}>
            <ProductDataEntryForm handleProductName={handleProductName} />
            <ProductPreview productName={productName} />
        </ProductEditorStyles>
    );
}

export default ProductEditor;
